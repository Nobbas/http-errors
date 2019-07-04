import { HTTPError } from './http-error';
import { HTTPStatusCode } from '../enums/http-status-code';
import { HTTPErrorType } from '../enums/http-error-type';

export class HTTPRegularError extends HTTPError {
  public status: HTTPStatusCode = HTTPStatusCode.REGULAR;
  public type: HTTPErrorType = HTTPErrorType.REGULAR;
}
