import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CourseItemType = {
    id: string;
    name: string;
    price: number;
    quantity: number;
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
            const { id, name, price, quantity } = action.payload;

            state.courses[0].items[id] = {
                id,
                name,
                price,
                quantity
            };
        },
        deleteItem: (state: CourseSliceStateInterface, action: PayloadAction<string>) => {
            delete state.courses[0].items[action.payload];
        }
    }
});

export const { createNewCourse, deleteCourse, addItem, deleteItem } = courseSlice.actions;

export default courseSlice.reducer;
