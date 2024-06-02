type MenuOptions = "" | "all" | "dog" | "cat" | "fish";

export const createMenuObject = (activerMenu: MenuOptions) => {

    let returnObjecy = { 
        all: false,
        dog: false,
        cat: false,
        fish: false,

    };

    if (activerMenu !== '') {
        returnObjecy[activerMenu] = true;
    }
    return returnObjecy
 }