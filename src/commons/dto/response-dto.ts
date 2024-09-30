export class ResponseDto<T> {
  statusCode: number;
  message: string;
  timestamp: string;
  data: T;
  error: boolean;

  constructor({ message, data }: { message: string; data: T }) {
    this.error = false;
    this.timestamp = new Date().toISOString();
    this.message = message;
    this.data = data;
  }
}

// Ejemplo
//return new ResponseDto<PendingTurnDto>({message: "sadas", data: pendingTurn})
