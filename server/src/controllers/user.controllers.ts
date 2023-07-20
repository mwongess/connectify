import { Request, Response } from "express"

export const updateUser = async (req:Request,res:Response) =>{
    try {
        // const {userID} = req.user!
        // const {}
    } catch (error:any) {
        res.json(error.message)
    }
}

export const deleteUser = async (req:Request,res:Response) =>{
    try {
        // const {userID} = req.user!
    } catch (error:any) {
        res.json(error.message)
    }
}