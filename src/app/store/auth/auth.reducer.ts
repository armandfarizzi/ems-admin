import { createFeatureSelector, createSelector, on } from "@ngrx/store"
import { createImmerReducer } from 'ngrx-immer/store';
import { clearForm, fillForm } from "./auth.actions"
import { AuthFeatureState } from "./auth.selector";


const initialState: AuthFeatureState = {
    key: "",
    password: ""
}

export const reducer = createImmerReducer(
    initialState,
    on(fillForm, (state, action) => {
        if (action.field)
            state[action.field] = action.value;
        return state;
    }),
    on(clearForm, (state) => {
        state.key = "";
        state.password = "";
        return state;
    })
)
