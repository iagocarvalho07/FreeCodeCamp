import { Request, Response } from "express";
import { createMenuObject } from '../helpers/createMenuObject'
import { pet } from "../models/pet"

export const home = ((req: Request, res: Response) => {
    const list = pet.getAll();
    res.render("pages/page", {
        menu: createMenuObject('all'),
        banner: {
            title: "Todos Os Animais",
            backgroud: "allanimals.jpg"
        },
        list
    })
});

export const dogs = ((req: Request, res: Response) => {
    const list = pet.getFromType("dog")
    res.render("pages/page", {
        menu: createMenuObject('dog'),
        banner: {
            title: "Cachorros",
            backgroud: "banner_dog.jpg"
        },
        list
    })
});
export const cats = ((req: Request, res: Response) => {
    const list = pet.getFromType("cat")
    res.render("pages/page", {
        menu: createMenuObject('cat'),
        banner: {
            title: "gatos",
            backgroud: "banner_cat.jpg"
        },
        list
    })
});
export const fish = ((req: Request, res: Response) => {
    const list = pet.getFromType("fish")
    res.render("pages/page", {
        menu: createMenuObject('fish'),
        banner: {
            title: "peixe",
            backgroud: "banner_fish.jpg"
        },
        list
    })
});
