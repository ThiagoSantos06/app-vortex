import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Category } from "./Category";
import { environment } from "src/environments/environment";

@Injectable ({
    providedIn: 'root'
})
export class CategoryRest {
    private readonly url: string = `${environment.apiUrl}/category`
    private http: HttpClient = inject(HttpClient)

    getAllCategories() {
        return this.http.get<Category[]>(this.url)
    }
}