export interface defaultResponse<T = any> {
	status: string;
	message: string;
	code: string;
	data: T;
}
