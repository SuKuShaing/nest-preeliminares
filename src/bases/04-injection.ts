import type {
    Move,
    PokeapiResponse,
} from "../interfaces/pokeapi-response.interface";
import {
    PokeApiAdapter,
    PokeApiFetchAdapter,
    type HttpAdapter,
} from "../api/pokeApi.adapter";

// Antes se podía escribir así
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
// Ahora ya no, solo así ⬇️

export class Pokemon {
    public readonly id: number;
    public name: string;
    private readonly http: HttpAdapter;
    // public imageUrl: string;

    constructor(id: number, name: string, http: HttpAdapter) {
        console.log("Llamado al Constructor");

        this.id = id;
        this.name = name;
        this.http = http;
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

    async getmoves(): Promise<Move[]> {
        // const moves = 10;
        // const { data } = await axios.get<PokeapiResponse>("https://pokeapi.co/api/v2/pokemon/4"); // await hace que espere a la respuesta
        const data = await this.http.get<PokeapiResponse>(
            "https://pokeapi.co/api/v2/pokemon/4",
        );
        console.log(data.moves);

        return data.moves;
    }
}

const pokeApiAxios = new PokeApiAdapter();
const pokeApiFetch = new PokeApiFetchAdapter();

export const charmander = new Pokemon(4, "Charmander", pokeApiFetch);

// charmander.id = 10; No se permiten modificaciones gracias al read only
charmander.name = "Mew";

console.log(charmander);
console.log(charmander.imageUrl);
charmander.scream();
// charmander.speak(); // no se puede ocupar fuera puesto que es private

// console.log(charmander.getmoves());
charmander.getmoves();
