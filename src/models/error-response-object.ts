import { HTTPErrorType } from '../enums/http-error-type';

export interface ErrorResponseObject {
  type: HTTPErrorType;
  message: string;
  detail?: Object;
}
