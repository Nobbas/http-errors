import { HTTPError } from './http-error';
import { HTTPStatusCode } from '@src/enums/http-status-code';
import { HTTPErrorType } from '@src/enums/http-error-type';

export class HTTPAutoDisplayError extends HTTPError {
  public status: HTTPStatusCode = HTTPStatusCode.AUTO_DISPLAY;
  public type: HTTPErrorType = HTTPErrorType.AUTO_DISPLAY;
}
