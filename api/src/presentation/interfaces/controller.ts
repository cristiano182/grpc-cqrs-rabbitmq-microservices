import { HttpRequest, HttpResponse } from "./http";


export interface IController {
    handle: (request: HttpRequest, response?: HttpResponse) => Promise<HttpResponse>
}