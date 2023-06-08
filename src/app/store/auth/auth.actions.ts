import { createAction, props } from "@ngrx/store"

export interface FillSignInPayload {
    field: 'key' | 'password' | null
    value: string
}

export const fillForm = createAction('[form] fill', props<FillSignInPayload>());
export const clearForm = createAction('[form] clear');