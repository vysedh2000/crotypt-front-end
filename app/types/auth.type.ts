export interface authData {
	sessionToken: string;
	userToken: string;
	expired_at: string;
}

export interface requestLogin {
	username?: string;
	email?: string;
	password: string;
	isExp: boolean;
}

export interface requestSignup {
	username: string;
	email: string;
	password: string;
	country: string;
}

export interface decodeToken {
	iat: string;
	username: string;
	uid: string;
}
