export interface ErrorResponseObject {
  type: string;
  // TODO: Is autoDisplay even needed? If userMessage is not null the error can be displayed by default. Just in case if there is any error that is not to be auto displayed it can go int detail key of this object. Also, it should not be the responsibility of backend to decide if something should be auto displayed on FE or not.
  autoDisplay?: boolean;
  developerMessage: string;
  userMessage?: string;
  detail?: object;
}
export interface ErrorType {
  type: string;
  status: HTTPStatus;
}

export type HTTPStatus = 400 | 401 | 403 | 404 | 500;
