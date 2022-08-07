import axios from 'axios';
import ApiClient from './ApiClient';
import { Params } from './types/Params';

export default class LotrSDK {
  readonly apiClient : ApiClient;

  constructor(token: string) {
    const axiosInstance = axios.create({
      baseURL: 'https://the-one-api.dev/v2',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    this.apiClient = new ApiClient(axiosInstance);
  }

  getBooksList(params: Params = {}) {
    return this.apiClient.makeRequest('book', params);
  }

  getSpecificBook(id: string, params: Params = {}) {
    return this.apiClient.makeRequest(`book/${id}`, params);
  }

  getSpecificBookChapter(id: string, params: Params = {}) {
    return this.apiClient.makeRequest(`book/${id}/chapter`, params);
  }

  getMoviesList(params: Params = {}) {
    return this.apiClient.makeRequest('movie', params);
  }

  getSpecificMovie(id: string, params: Params) {
    return this.apiClient.makeRequest(`movie/${id}`, params);
  }

  getSpecificMovieQuote(id: string, params: Params) {
    return this.apiClient.makeRequest(`movie/${id}/quote`, params);
  }

  getCharactersList(params: Params = {}) {
    return this.apiClient.makeRequest('character', params);
  }

  getSpecificCharacter(id: string, params: Params = {}) {
    return this.apiClient.makeRequest(`character/${id}`, params);
  }

  getSpecificCharacterQuote(id: string, params: Params = {}) {
    return this.apiClient.makeRequest(`character/${id}/quote`, params);
  }

  getQuotesList(params: Params = {}) {
    return this.apiClient.makeRequest('quote', params);
  }

  getSpecificQuote(id: string, params: Params = {}) {
    return this.apiClient.makeRequest(`quote/${id}`, params);
  }

  getChaptersList(params: Params = {}) {
    return this.apiClient.makeRequest('chapter', params);
  }

  getSpecificChapter(id: string, params: Params = {}) {
    return this.apiClient.makeRequest(`chapter/${id}`, params);
  }
}
