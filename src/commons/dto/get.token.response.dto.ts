export class GetUrlResponseDto<T> {
    statusCode: number;
    message: string;
    timestamp: string;
    data: T;
    error: boolean;
    url?: string;
  
    constructor({ message, data, url }: { message: string; data: T, url:string }) {
      this.error = false;
      this.timestamp = new Date().toISOString();
      this.message = message;
      this.data = data;
      this.url = url;
    }
  }