import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getHoursInMilliSecond, getMinutesInMilliSecond } from '@/utils/global';

export type PreparationTimeType = {
    min: number;
    hour: number;
};

export type CourseItemType = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    courseIndex?: number;
    itemNote?: string;
    itemOpen?: boolean;
    preparationTime: PreparationTimeType;
};

export type Course = {
    open: boolean;
    name?: string;
    note?: string;
    preparationTime?: number | undefined;
    modifiedPreparationDateTime?: string | undefined;
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
            // Close all the previously open courses before creating new ones
            state.courses.forEach((course) => {
                course.open = false;
            });

            state.courses.push({ items: {}, open: true });
        },
        deleteCourse: (state: CourseSliceStateInterface, action: PayloadAction<number>): void => {
            state.courses.splice(action.payload, 1);
        },
        addItem: (state: CourseSliceStateInterface, action: PayloadAction<CourseItemType>): void => {
            const { id, name, price, quantity, courseIndex, preparationTime } = action.payload;

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
                    courseIndex,
                    preparationTime
                };
            }
        },
        // Increase course timer
        increaseCourseTimer: (
            state: CourseSliceStateInterface,
            action: PayloadAction<{
                courseIndex: number;
                preparationTime: PreparationTimeType;
                quantity?: number;
            }>
        ): void => {
            const { courseIndex, preparationTime, quantity = 1 } = action.payload;

            let totalTime = state.courses[courseIndex].preparationTime || 0;

            if (preparationTime?.min) {
                totalTime += quantity * getMinutesInMilliSecond(preparationTime.min) || 0;
            }

            if (preparationTime?.hour) {
                totalTime += quantity * getHoursInMilliSecond(preparationTime.hour) || 0;
            }

            state.courses[courseIndex].preparationTime = totalTime;
        },
        // Decrease course timer
        decreaseCourseTimer: (
            state: CourseSliceStateInterface,
            action: PayloadAction<{
                courseIndex: number;
                preparationTime: PreparationTimeType;
                quantity?: number;
            }>
        ): void => {
            const { courseIndex, preparationTime, quantity = 1 } = action.payload;

            let totalTime = 0;

            if (preparationTime?.min) {
                totalTime += quantity * getMinutesInMilliSecond(preparationTime.min) || 0;
            }

            if (preparationTime?.hour) {
                totalTime += quantity * getHoursInMilliSecond(preparationTime.hour) || 0;
            }

            state.courses[courseIndex].preparationTime = // eslint-disable-line
                (state.courses[courseIndex].preparationTime as number) - totalTime;
        },
        // Change the modifyCourseTimeDate course time & date
        modifyCourseTimeDate: (
            state: CourseSliceStateInterface,
            action: PayloadAction<{ courseIndex: number; modifiedTimeDate: string }>
        ): void => {
            const { courseIndex, modifiedTimeDate } = action.payload;

            state.courses[courseIndex].modifiedPreparationDateTime = modifiedTimeDate;
        },
        // Decrease or Increase the  course timer
        modifyCourseTimer: (
            state: CourseSliceStateInterface,
            action: PayloadAction<{
                courseIndex: number;
            }>
        ): void => {
            const { courseIndex } = action.payload;

            let totalTime = 0;

            const courseItems = state.courses[courseIndex].items;

            // Accumulate the course times preparation time in totalTime variable in milliseconds
            for (const itemsKey in courseItems) {
                if (Object.hasOwnProperty.call(courseItems, itemsKey)) {
                    const item = courseItems[itemsKey];

                    totalTime += item.quantity * getMinutesInMilliSecond(item.preparationTime.min) || 0;

                    totalTime += item.quantity * getHoursInMilliSecond(item.preparationTime.hour) || 0;
                }
            }

            state.courses[courseIndex].preparationTime = totalTime;
        },

        // Delete an item from a course
        deleteItem: (
            state: CourseSliceStateInterface,
            action: PayloadAction<{
                courseIndex: number;
                itemID: string;
            }>
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
        // Clear the item note
        clearItemNote: (
            state: CourseSliceStateInterface,
            action: PayloadAction<{ courseIndex: number; itemID: string }>
        ): void => {
            const { courseIndex, itemID } = action.payload;

            state.courses[courseIndex].items[itemID].itemNote = '';
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
        },
        // Re-arrange course items
        reArrangeCourseItems: (
            state: CourseSliceStateInterface,
            action: PayloadAction<{
                source: { courseIndex: number; itemIndex: number; itemID?: string };
                destination: { courseIndex: number; itemIndex: number; itemID?: string };
            }>
        ): void => {
            const { source, destination } = action.payload;

            const modifiedObject: { [key: string]: CourseItemType } = {};

            const sourceArray = Object.keys(state.courses[source.courseIndex].items);

            const [deletedItem] = sourceArray.splice(source.itemIndex, 1);

            sourceArray.splice(destination.itemIndex, 0, deletedItem);

            sourceArray.forEach((data: string) => {
                modifiedObject[data] = state.courses[source.courseIndex].items[data];
            });

            state.courses[destination.courseIndex].items = modifiedObject;
        },
        // Set the course note
        saveCourseNote: (
            state: CourseSliceStateInterface,
            action: PayloadAction<{ courseIndex: number; note: string }>
        ): void => {
            const { courseIndex, note } = action.payload;

            state.courses[courseIndex].note = note;
        },
        // Clear the item note
        clearCourseNote: (
            state: CourseSliceStateInterface,
            action: PayloadAction<{ courseIndex: number }>
        ): void => {
            const { courseIndex } = action.payload;

            state.courses[courseIndex].note = '';
        },
        // Clear the whole course
        clearCourse: (state: CourseSliceStateInterface): void => {
            state.courses = [];
        }
    }
});

export const {
    createNewCourse,
    deleteCourse,
    addItem,
    increaseCourseTimer,
    decreaseCourseTimer,
    deleteItem,
    expandCourse,
    increaseItemQuantity,
    decreaseItemQuantity,
    modifyCourseTimeDate,
    modifyCourseTimer,
    modifyItemQuantity,
    setItemNote,
    clearItemNote,
    toggleItemExpand,
    saveCourseName,
    reArrangeCourseItems,
    saveCourseNote,
    clearCourseNote,
    clearCourse
} = courseSlice.actions;

export default courseSlice.reducer;
