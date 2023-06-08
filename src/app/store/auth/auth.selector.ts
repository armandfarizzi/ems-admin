export const authFeatureKey = 'authFeature';

export interface AuthFeatureState {
    key: string
    password: string
}

export interface AppState {
    authFeature: {
        auth: AuthFeatureState
    }
}

export const selectKey = (state: AppState) => state.authFeature.auth.key;
export const selectPassword = (state: AppState) => state.authFeature.auth.password;