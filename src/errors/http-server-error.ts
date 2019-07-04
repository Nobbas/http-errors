import { HTTPError } from './http-error';
import { HTTPStatusCode } from '../enums/http-status-code';
import { HTTPErrorType } from '../enums/http-error-type';

export class HTTPServerError extends HTTPError {
  public status: HTTPStatusCode = HTTPStatusCode.SERVER_ERROR;
  public type: HTTPErrorType = HTTPErrorType.SERVER_ERROR;
}
