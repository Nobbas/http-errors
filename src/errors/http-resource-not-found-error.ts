import { HTTPError } from './http-error';
import { HTTPStatusCode } from '@src/enums/http-status-code';
import { HTTPErrorType } from '@src/enums/http-error-type';

export class HTTPResourceNotFoundError extends HTTPError {
  public status: HTTPStatusCode = HTTPStatusCode.RESOURCE_NOT_FOUND;
  public type: HTTPErrorType = HTTPErrorType.RESOURCE_NOT_FOUND;
}
