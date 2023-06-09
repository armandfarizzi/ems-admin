import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, catchError, map, mergeMap } from 'rxjs';
import { submitForm, submitFormSuccess } from './auth.actions';
import { AuthService } from './auth.service';


@Injectable()
export class ProductEffect {
    submit$ = createEffect(() =>
        this.actions$.pipe(
            ofType(submitForm.type),
            mergeMap(() => this.authService.authSignIn()
                .pipe(
                    map(res => submitFormSuccess(res)),
                    catchError(() => EMPTY),
                )),
        )
    )

    constructor(
        private actions$: Actions,
        private authService: AuthService) { }
}
