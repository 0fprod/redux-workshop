import { PARAMETER_FLAG } from "./const";

export abstract class BaseAPI<T> {
  private baseUrl: string = "";

  constructor(url: string) {
    this.baseUrl = url;
  }

  fetchData(param: any): Promise<T> {
    let urlWithParams: string = this.baseUrl.replace(PARAMETER_FLAG, param);

    return fetch(urlWithParams)
      .then(response => this.checkStatus(response))
      .then(response => this.parseJSON(response))
      .then(data => this.dataMapper(data));
  }

  private checkStatus(response: Response): Promise<Response> {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      let error = new Error(response.statusText);
      throw error;
    }
  }

  private parseJSON(response: Response): any {
    return response.json();
  }

  abstract dataMapper(data: any): Promise<T>;
}
