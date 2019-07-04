import { HTTPError } from './http-error';
import { HTTPStatusCode } from '@src/enums/http-status-code';

export class HTTPRegularError extends HTTPError {
  public status: HTTPStatusCode = HTTPStatusCode.REGULAR;
}
