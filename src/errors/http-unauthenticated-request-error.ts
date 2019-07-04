import { HTTPError } from './http-error';
import { HTTPStatusCode } from '@src/enums/http-status-code';
import { HTTPErrorType } from '@src/enums/http-error-type';

export class HTTPUnauthenticatedRequestError extends HTTPError {
  public status: HTTPStatusCode = HTTPStatusCode.UNAUTHENTICATED_REQUEST;
  public type: HTTPErrorType = HTTPErrorType.UNAUTHENTICATED_REQUEST;
}
