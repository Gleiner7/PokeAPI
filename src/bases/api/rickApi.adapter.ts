import axios from 'axios';
import type { HttpAdapter } from '../interfaces/rickapi-response.interface';

export class RickApiAdapter implements HttpAdapter {
    async get<T>(url: string): Promise<T> {
        const { data } = await axios.get<T>(url);
        return data;
    }
}