
export interface HttpRequest {
    body: any;
    params: any;
    method: any;
    route: any;
    statusCode?: any;
}


export interface HttpResponse  {
    statusCode: number;
    data: any
}

export const ok  = (data: any): HttpResponse => ( {
statusCode: 200,
data
})

export const serverError = (err: Error):  HttpResponse  => ({
    statusCode: 500,
    data: err.stack
})





