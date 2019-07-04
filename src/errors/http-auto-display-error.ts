import { HTTPError } from './http-error';
import { HTTPStatusCode } from '@src/enums/http-status-code';

export class HTTPAutoDisplayError extends HTTPError {
  public status: HTTPStatusCode = HTTPStatusCode.AUTO_DISPLAY;
}
