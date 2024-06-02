import { Request, Response } from "express";

export const home = ((req: Request, res: Response) =>{
    res.send("Home No controller")
});

export const dogs = ((req: Request, res: Response) =>{
    res.send("dogs No controller")
});
export const cats = ((req: Request, res: Response) =>{
    res.send("cats No controller")
});
export const fish = ((req: Request, res: Response) =>{
    res.send("fish No controller")
});
