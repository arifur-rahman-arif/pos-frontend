import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CourseItem = {
    name: string;
    price: number;
    quantity: number;
};

type Course = {
    items: Array<CourseItem>;
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
            state.courses.push({ items: [] });
        },
        deleteCourse: (state: CourseSliceStateInterface, action: PayloadAction<number>) => {
            state.courses.splice(action.payload, 1);
        },
        addItem: (state: CourseSliceStateInterface, action: PayloadAction<CourseItem>) => {
            const { name, price, quantity } = action.payload;

            state.courses[0].items.push({
                name: name,
                price: price,
                quantity: quantity
            });
        }
    }
});

export const { createNewCourse, deleteCourse, addItem } = courseSlice.actions;

export default courseSlice.reducer;
