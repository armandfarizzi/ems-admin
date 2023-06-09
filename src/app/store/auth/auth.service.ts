import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, of, take, takeLast } from "rxjs";
import { AppState, AuthFeatureState, authFeatureKey } from "./auth.selector";

export interface response {
    success: boolean,
    toBeSend: any
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(
        private store: Store<AppState>,
        private http: HttpClient
    ) { }

    authSignIn(): Observable<response> {
        let toBeSend: AuthFeatureState | undefined;
        const b = this.store.select(state => state.authFeature.auth);
        const c = b.pipe(take(1)).subscribe(p => {
            toBeSend = p;
        })
        return of({ "success": true, toBeSend: toBeSend })
    }
}