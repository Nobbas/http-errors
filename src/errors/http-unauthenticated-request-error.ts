import { HTTPError } from './http-error';
import { HTTPStatusCode } from '@src/enums/http-status-code';

export class HTTPUnauthenticatedRequestError extends HTTPError {
  public status: HTTPStatusCode = HTTPStatusCode.UNAUTHENTICATED_REQUEST;
}
