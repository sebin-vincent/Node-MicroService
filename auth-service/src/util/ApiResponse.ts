export class ApiResponse {
    private status: number;
    private data: any;
    private message: string;


    constructor (status?: number, message?: string, data?: any) {
        this.status = status || 200;
        this.message = message || 'OK';
        this.data = data || null;
    }


}