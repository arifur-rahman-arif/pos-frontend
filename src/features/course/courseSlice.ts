import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CourseItemType = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    courseIndex?: number;
};

type Course = {
    open: boolean;
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
        createNewCourse: (state: CourseSliceStateInterface) => {
            // If it's a fist course then it should be open by default
            // If the course is not first one then it should be closed by default
            !state.courses.length
                ? state.courses.push({ items: {}, open: true })
                : state.courses.push({
                      items: {}, // eslint-disable-line
                      open: false // eslint-disable-line
                  }); // eslint-disable-line
        },
        deleteCourse: (state: CourseSliceStateInterface, action: PayloadAction<number>) => {
            state.courses.splice(action.payload, 1);
        },
        addItem: (state: CourseSliceStateInterface, action: PayloadAction<CourseItemType>) => {
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
                    quantity
                };
            }
        },
        // Delete an item from a course
        deleteItem: (
            state: CourseSliceStateInterface,
            action: PayloadAction<{ courseIndex: number; itemID: string }>
        ) => {
            const { courseIndex, itemID } = action.payload;

            delete state.courses[courseIndex].items[itemID];
        },
        // Open a course my matching index and close rest of the courses
        expandCourse: (state: CourseSliceStateInterface, action: PayloadAction<number>) => {
            state.courses.forEach((course, index) => {
                if (state.courses[index].open) {
                    return (state.courses[index].open = !state.courses[index].open);
                }

                state.courses[index].open = index === action.payload;
            });
        }
    }
});

export const { createNewCourse, deleteCourse, addItem, deleteItem, expandCourse } = courseSlice.actions;

export default courseSlice.reducer;
