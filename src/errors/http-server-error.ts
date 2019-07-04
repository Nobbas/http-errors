import { HTTPError } from './http-error';
import { HTTPStatusCode } from '@src/enums/http-status-code';
import { HTTPErrorType } from '@src/enums/http-error-type';

export class HTTPServerError extends HTTPError {
  public status: HTTPStatusCode = HTTPStatusCode.SERVER_ERROR;
  public type: HTTPErrorType = HTTPErrorType.SERVER_ERROR;
}
