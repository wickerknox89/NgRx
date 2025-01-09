import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { compareCourses, Course } from "../model/course";
import { createReducer, on } from "@ngrx/store";
import { CourseActions } from "../action-types";
import { allCoursesLoaded } from "../course.actions";


export interface CoursesState extends EntityState<Course>{
    allCoursesLoaded: boolean
}

export const adapter = createEntityAdapter<Course>({
    sortComparer: compareCourses,
    // selectId: course => course.courseId
});


export const initialCoursesState = adapter.getInitialState({
    allCoursesLoaded: false
});

export const coursesReducer = createReducer(

    initialCoursesState,

    on( CourseActions.allCoursesLoaded, 
        (state, action) => adapter.setAll(action.courses, {...state, allCoursesLoaded: true})
    )
);

export const {selectAll} = adapter.getSelectors();



