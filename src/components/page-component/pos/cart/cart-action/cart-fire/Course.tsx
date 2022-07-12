import { Course } from '@/features/cart/courseSlice';
import { Card, CardContent, Stack, Typography } from '@mui/material';
import CourseTimer from '@/components/page-component/pos/cart/cart-action/cart-fire/CourseTimer';

interface PropInterface {
    course: Course;
    courseIndex: number;
}

/**
 * Course component of the Fire action user flow
 * @param {Course} course
 * @param {number} courseIndex
 * @returns {JSX.Element}
 * @constructor
 */
const Course = ({ course, courseIndex }: PropInterface) => {
    return (
        <Card
            sx={{
                boxShadow: (theme) => theme.shadows[12]
            }}
        >
            <CardContent
                sx={{
                    px: 2,
                    py: 2,
                    paddingBottom: '10px !important',
                    minWidth: '300px'
                }}
            >
                <Stack alignItems="center" gap={2} direction="row" justifyContent="space-between">
                    <Typography
                        variant="body1"
                        sx={{
                            whiteSpace: 'nowrap',
                            mt: -0.2
                        }}
                    >
                        {course.name || `Course ${courseIndex + 1}`}
                    </Typography>

                    <CourseTimer course={course} courseIndex={courseIndex} />
                </Stack>
            </CardContent>
        </Card>
    );
};

export default Course;
