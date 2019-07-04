import { HTTPError } from './http-error';
import { HTTPStatusCode } from '@src/enums/http-status-code';

export class HTTPResourceNotFoundError extends HTTPError {
  public status: HTTPStatusCode = HTTPStatusCode.RESOURCE_NOT_FOUND;
}
