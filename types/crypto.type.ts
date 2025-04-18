export interface Crypto {
  id: number;
  name: string;
  price: number;
  symbol: string;
  volume: number;
}

export type CreateCrypto = Omit<Crypto, "id">;
