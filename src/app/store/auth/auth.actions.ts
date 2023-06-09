import { createAction, props } from "@ngrx/store"
import { response } from "./auth.service";

export interface FillSignInPayload {
    field: 'key' | 'password' | null
    value: string
}

export const submitFormSuccess = createAction('[Form] submit success', props<response>());
export const submitForm = createAction('[Form] submit');
export const fillForm = createAction('[form] fill', props<FillSignInPayload>());
export const clearForm = createAction('[form] clear');