import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { SignUpForm } from "./SignUpForm";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class UserRest {
    private http = inject(HttpClient);
    private readonly url = environment.apiUrl + "/api/user";

    signUp(form: SignUpForm) {
        return this.http.post(this.url, form);
    }
}