import { HTTPError } from './http-error';
import { HTTPStatusCode } from '../enums/http-status-code';
import { HTTPErrorType } from '../enums/http-error-type';

export class HTTPResourceNotFoundError extends HTTPError {
  public status: HTTPStatusCode = HTTPStatusCode.RESOURCE_NOT_FOUND;
  public type: HTTPErrorType = HTTPErrorType.RESOURCE_NOT_FOUND;
}
