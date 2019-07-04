import { HTTPError } from './http-error';
import { HTTPStatusCode } from '@src/enums/http-status-code';
import { HTTPErrorType } from '@src/enums/http-error-type';

export class HTTPRegularError extends HTTPError {
  public status: HTTPStatusCode = HTTPStatusCode.REGULAR;
  public type: HTTPErrorType = HTTPErrorType.REGULAR;
}
