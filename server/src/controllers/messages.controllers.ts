import { Request, Response } from "express";

export const message = (req: Request, res:Response) => {
    try {
        
    } catch (error: any) {
        res.json(error.message)
        
    }
}