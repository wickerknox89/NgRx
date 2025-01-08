import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { Course } from "../model/course";
import { createReducer, on } from "@ngrx/store";
import { CourseActions } from "../action-types";


export interface CoursesState extends EntityState<Course>{
    
}

export const adapter = createEntityAdapter<Course>();


export const initialCoursesState = adapter.getInitialState();

export const coursesReducer = createReducer(

    initialCoursesState,

    on( CourseActions.allCoursesLoaded, 
        (state, action) => adapter.setAll(action.courses, state)
    )
);

export const {selectAll} = adapter.getSelectors();



