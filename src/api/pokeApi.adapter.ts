import axios from "axios";

export interface HttpAdapter {
    get<T>(url: string): Promise<T>;
}

export class PokeApiFetchAdapter implements HttpAdapter {
    async get<T>(url: string): Promise<T> {
        const resp = await fetch(url);
        const data: T = await resp.json();
        console.log("Se usó Fetch");
        return data;
    }
}

export class PokeApiAdapter implements HttpAdapter {
    private readonly axios = axios;

    async get<T>(url: string) {
        // el <T> es un genérico, se le envía y T recibe el Tipo enviado, y se asigna más abajo
        const { data } = await this.axios.get<T>(url); // este axios es el que viene después de readonly
        // await hace que espere a la respuesta
        console.log("Se usó Axios");
        return data;
    }

    async post(url: string, data: any) {}
    async patch(url: string, data: any) {}
    async delete(url: string) {}
}
