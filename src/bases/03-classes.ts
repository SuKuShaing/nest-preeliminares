import axios from "axios";

export class Pokemon {
    public readonly id: number;
    public name: string;
    // public imageUrl: string;

    constructor(id: number, name: string) {
        console.log("Llamado al Constructor");

        this.id = id;
        this.name = name;
        // this.imageUrl = imageUrl;
    }

    get imageUrl(): string {
        // funciona como un parametro más
        return `https://pokemon.com/${this.id}.jpg`;
    }

    public scream() {
        console.log(`${this.name.toUpperCase()}!!!!!!`);
    }

    private speak() {
        console.log(`${this.name}, ${this.name}, ${this.name}`);
    }

    async getmoves() {
        // const moves = 10;
        const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/4"); // await hace que espere a la respuesta
        console.log(data.moves.length);

        return data.moves;
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

console.log(charmander);
console.log(charmander.imageUrl);
charmander.scream();
// charmander.speak(); // no se puede ocupar fuera puesto que es private

// console.log(charmander.getmoves());
charmander.getmoves();
