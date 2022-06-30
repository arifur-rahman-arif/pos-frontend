import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CourseItemType = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    courseIndex?: number;
    itemNote?: string;
    itemOpen?: boolean;
};

export type Course = {
    open: boolean;
    name?: string;
    items: {
        [key: string]: CourseItemType;
    };
};

export interface CourseSliceStateInterface {
    courses: Array<Course>;
}

const initialState: CourseSliceStateInterface = {
    courses: []
};

const courseSlice = createSlice({
    name: 'courseSlice',
    initialState,
    reducers: {
        createNewCourse: (state: CourseSliceStateInterface): void => {
            // If it's a fist course then it should be open by default
            // If the course is not first one then it should be closed by default
            !state.courses.length
                ? state.courses.push({ items: {}, open: true })
                : state.courses.push({
                      items: {}, // eslint-disable-line
                      open: false // eslint-disable-line
                  }); // eslint-disable-line
        },
        deleteCourse: (state: CourseSliceStateInterface, action: PayloadAction<number>): void => {
            state.courses.splice(action.payload, 1);
        },
        addItem: (state: CourseSliceStateInterface, action: PayloadAction<CourseItemType>): void => {
            const { id, name, price, quantity, courseIndex } = action.payload;

            if (!id || !name || !price || !quantity) return;

            if (courseIndex === undefined) return;

            // If an item is already exits in the course then increase the quantity
            if (state.courses[courseIndex].items[id]) {
                state.courses[courseIndex].items[id].quantity += 1;
            } else {
                state.courses[courseIndex].items[id] = {
                    id,
                    name,
                    price,
                    quantity,
                    courseIndex
                };
            }
        },
        // Delete an item from a course
        deleteItem: (
            state: CourseSliceStateInterface,
            action: PayloadAction<{ courseIndex: number; itemID: string }>
        ): void => {
            const { courseIndex, itemID } = action.payload;

            delete state.courses[courseIndex].items[itemID];
        },
        // Open a course my matching index and close rest of the courses
        expandCourse: (state: CourseSliceStateInterface, action: PayloadAction<number>): void => {
            state.courses.forEach((course, index) => {
                if (state.courses[index].open) {
                    state.courses[index].open = !state.courses[index].open;
                    return;
                }

                state.courses[index].open = index === action.payload;
            });
        },
        // Increase the item quantity
        increaseItemQuantity: (
            state: CourseSliceStateInterface,
            action: PayloadAction<{ courseIndex: number; itemID: string; quantity?: number }>
        ): void => {
            const { courseIndex, itemID, quantity = 1 } = action.payload;

            state.courses[courseIndex].items[itemID].quantity += quantity;
        },
        // Decrease the item quantity
        decreaseItemQuantity: (
            state: CourseSliceStateInterface,
            action: PayloadAction<{ courseIndex: number; itemID: string; quantity?: number }>
        ): void => {
            const { courseIndex, itemID, quantity = 1 } = action.payload;

            if (state.courses[courseIndex].items[itemID].quantity > 0) {
                state.courses[courseIndex].items[itemID].quantity -= quantity;
            }
        },
        // Modify item quantity by number
        modifyItemQuantity: (
            state: CourseSliceStateInterface,
            action: PayloadAction<{ courseIndex: number; itemID: string; quantity: number }>
        ): void => {
            const { courseIndex, itemID, quantity } = action.payload;

            if (quantity) {
                state.courses[courseIndex].items[itemID].quantity = quantity;
            } else {
                state.courses[courseIndex].items[itemID].quantity = 1;
            }
        },
        // Set the item note for the item
        setItemNote: (
            state: CourseSliceStateInterface,
            action: PayloadAction<{ courseIndex: number; itemID: string; note: string }>
        ): void => {
            const { courseIndex, itemID, note } = action.payload;

            state.courses[courseIndex].items[itemID].itemNote = note;
        },
        // Toggle item expand
        toggleItemExpand: (
            state: CourseSliceStateInterface,
            action: PayloadAction<{ courseIndex: number; itemID: string }>
        ): void => {
            const { courseIndex, itemID } = action.payload;

            state.courses[courseIndex].items[itemID].itemOpen = // eslint-disable-line
                !state.courses[courseIndex].items[itemID].itemOpen;
        },
        // Save the courseName
        saveCourseName: (
            state: CourseSliceStateInterface,
            action: PayloadAction<{ courseIndex: number; name: string }>
        ): void => {
            const { courseIndex, name } = action.payload;

            state.courses[courseIndex].name = name;
        }
    }
});

export const {
    createNewCourse,
    deleteCourse,
    addItem,
    deleteItem,
    expandCourse,
    increaseItemQuantity,
    decreaseItemQuantity,
    modifyItemQuantity,
    setItemNote,
    toggleItemExpand,
    saveCourseName
} = courseSlice.actions;

export default courseSlice.reducer;
