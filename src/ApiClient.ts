import { Axios } from 'axios';
import { Params } from './types/Params';

export default class ApiClient {
  private axios: Axios;

  constructor(axios: Axios) {
    this.axios = axios;
  }

  private async request(url: string) {
    const response = await this.axios.get(url);
    return response.data;
  }

  private static getQuery(params: Params) {
    let query = '?';
    if (params.limit) {
      query += `&limit=${params.limit}`;
    }
    if (params.page) {
      query += `&page=${params.page}`;
    }
    if (params.offset) {
      query += `&offset=${params.offset}`;
    }
    if (params.sort) {
      query += `&sort=${params.sort.selector}:${params.sort.order}`;
    }
    return query;
  }

  makeRequest(endpoint: string, params: Params = {}) {
    const query = ApiClient.getQuery(params);
    const url = endpoint + query;
    return this.request(url);
  }
}
