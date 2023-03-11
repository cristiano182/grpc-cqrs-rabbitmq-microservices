import { IController } from "../../presentation/interfaces/controller";
import {Request, Response} from 'express'

export const adapterRoute =  (controller: IController) => {
    return async (request: Request, response: Response) => {
        const httpResponse =  await controller.handle(request)
       return response.status(httpResponse.statusCode).json(httpResponse.data)
    }
    
}