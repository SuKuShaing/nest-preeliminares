import axios from "axios";

export class PokeApiAdapter {
    private readonly axios = axios;

    async get(url: string) {
        const { data } = await this.axios.get(url); // este axios es el que viene después de readonly
        // await hace que espere a la respuesta
        return data;
    }

    async post(url: string, data: any) {}
    async patch(url: string, data: any) {}
    async delete(url: string) {}
}
