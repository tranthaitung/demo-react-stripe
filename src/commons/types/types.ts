export interface IRequestErrorResponse {
  status: number;
  error: string;
  message: string;
}

export interface IRequestSuccessResponse {
  status: number;
  message: string;
  results: any;
}
