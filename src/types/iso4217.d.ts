declare module 'iso4217' {
  export interface CurrencyInfo {
    Code: string;
    Fraction: number;
    Name: string;
    Number: number;
  }

  export const utils: {
    getByCode(code: string): CurrencyInfo | undefined;
    getByNumber(number: number): CurrencyInfo | undefined;
    getByName(name: string): CurrencyInfo | undefined;
  };
}