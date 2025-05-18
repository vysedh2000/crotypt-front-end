export interface Crypto {
	change: number;
	id: number;
	name: string;
	price: number;
	ccy: string;
	symbol: string;
	volume: number;
	imageUrl: string;
}

export type CreateCrypto = Omit<Crypto, "id">;

export interface CryptoPriceHis {
	id: number;
	symbol: string;
	price: number;
	ccy: string;
	time: string;
	insertAt: string;
}
