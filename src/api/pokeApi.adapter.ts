import axios from "axios";

export class PokeApiFetchAdapter {
    async get<T>(url: string): Promise<T> {
        const resp = await fetch(url);
        const data: T = await resp.json();

        return data;
    }
}

export class PokeApiAdapter {
    private readonly axios = axios;

    async get<T>(url: string) {
        // el <T> es un genérico, se le envía y T recibe el Tipo enviado, y se asigna más abajo
        const { data } = await this.axios.get<T>(url); // este axios es el que viene después de readonly
        // await hace que espere a la respuesta
        return data;
    }

    async post(url: string, data: any) {}
    async patch(url: string, data: any) {}
    async delete(url: string) {}
}
