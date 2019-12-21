import { Injectable } from "@angular/core";
import * as localForage from "localforage";

@Injectable({
  providedIn: "root"
})
export class LocalForageService {
  constructor() {}

  // prende l'item solo se ancora valido
  async getItem(key: string | object, skipExpirationCheck?: boolean) {
    const newKey = this.serializeKey(key);

    const {
      expire,
      data
    }: { expire: number; data: unknown } = await localForage.getItem(newKey);

    if (data) {
      // se l'expire date non è ancora arrivato
      if (expire && expire > Date.now()) return data;
      // se devo skippare il check o non esiste un expiration date
      if (skipExpirationCheck || !expire) return data;
    }

    // altrimenti ritorna null
    return null;
  }

  async setItem(key: string | object, data: any, expire?: number) {
    const newKey = this.serializeKey(key);

    if (expire) {
      expire = Math.round(expire * 1000 + Date.now()); // * 1000 to use seconds
    }

    return await localForage.setItem(newKey, { data, expire });
  }

  // Se la chiave è un oggetto la rende stringa (per compatibilità con storage)
  serializeKey(key: string | object): string {
    if (typeof key === "object" && key !== null) {
      return JSON.stringify(key);
    } else if (key === "string") {
      return key;
    }
  }
}
