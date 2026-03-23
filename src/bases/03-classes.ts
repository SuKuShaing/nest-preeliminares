export class Pokemon {
    public readonly id: number;
    public name: string;

    constructor(id: number, name: string) {
        console.log("Llamado al Constructor");

        this.id = id;
        this.name = name;
    }
}

// export class Pokemon {
//     constructor(
//         public readonly id: number,
//         public name: string,
//     ) {
//         console.log("Llamado al Constructor");

//         this.id = id;
//         this.name = name;
//     }
// }

export const charmander = new Pokemon(4, "Charmander");

// charmander.id = 10; No se permiten modificaciones gracias al read only
charmander.name = "Mew";
