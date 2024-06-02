import { Request, Response } from "express";
import { pet } from "../models/pet";
import { createMenuObject } from "../helpers/createMenuObject"


export const search = ((req: Request, res: Response) => {
    let query: string = req.query.q as string;
    let list = pet.getFromName(query);
    console.log(list)

    res.render("pages/page"), {
        menu: createMenuObject(""),
        list
    }
});