import { COSTY_PASSPORT_KEY } from "@/config/config";

class LocaleStorage {
  setValue(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getValue(key: string): string {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : "";
  }

  removeValue(key: string) {
    localStorage.removeItem(key);
  }

  // JWT //
  setJWT(jwt: string) {
    this.setValue(COSTY_PASSPORT_KEY, jwt);
  }

  getJWT() {
    return this.getValue(COSTY_PASSPORT_KEY);
  }

  removeJWT() {
    this.removeValue(COSTY_PASSPORT_KEY);
  }
}

export default new LocaleStorage();
