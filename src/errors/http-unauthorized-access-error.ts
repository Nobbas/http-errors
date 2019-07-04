import { HTTPError } from './http-error';
import { HTTPStatusCode } from '@src/enums/http-status-code';

export class HTTPUnauthorizedAccessError extends HTTPError {
  public status: HTTPStatusCode = HTTPStatusCode.UNAUTHORISED_ACCESS;
}
