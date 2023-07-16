import { Request, Response } from "express";

export const login = async(req: Request, res:Response) => {
    try {
        const {userName, password} = req.body 
        // Validate req body
    } catch (error) {
        res.json(error)
    }
}

export const signup = async(req: Request, res:Response) => {
    try {
        const {userName,email, password} = req.body
        // Validate req body
    } catch (error) {
        res.json(error)
    }
}