export const pokemonIds = [1, 2, 3, 4, 55];

pokemonIds.push(+"1");

console.log(pokemonIds);

interface Pokemon {
    id: number;
    name: string;
    age: number;
}

export const bulbasaur: Pokemon = {
    id: 1,
    name: "Bulbasaur",
    age: 2,
};

export const charmander: Pokemon = {
    id: 4,
    name: "Charmander",
    age: 1,
};

console.log(bulbasaur);
