import axios, {AxiosInstance, AxiosPromise, AxiosRequestConfig} from 'axios';
import firebase from 'firebase/app';
import 'firebase/functions';

/**
 * Cloud Functionsを使う場合は全てこれを経由する。
 */
export class FirebaseFunctions {

  private static axios: AxiosInstance;

  public static init = (baseURL: string) => {
    FirebaseFunctions.axios = axios.create({
      baseURL: baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  public static post = <T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T> => FirebaseFunctions.axios.post<T>(url, data, config);
  public static get = <T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T> => FirebaseFunctions.axios.get(url, config);

  public static setToken = token => {
    FirebaseFunctions.axios.defaults.headers['X-Api-Key'] = token;
  };

  /**
   * callable functions(httpsCallable)を呼ぶメソッド
   * @param apiName
   * @param data
   * @param options
   */
  public static call = async (apiName: string, data?, options?) => {
    const res = await firebase.functions().httpsCallable(apiName, options)(data).catch(e => {
      throw e;
    });
    if (!res) throw new Error('Empty response.');
    return res.data;
  };

}
