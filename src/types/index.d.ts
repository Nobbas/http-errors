export interface ErrorResponseObject {
  type: string;
  developerMessage: string;
  userMessage?: string;
  detail?: object;
}
export interface ErrorType {
  type: string;
  status: HTTPStatus;
}

export type HTTPStatus = 400 | 401 | 403 | 404 | 500;
