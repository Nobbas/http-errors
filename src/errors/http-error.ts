import { HTTPStatusCode } from '@src/enums/http-status-code';

export abstract class HTTPError extends Error {
  public status: HTTPStatusCode | undefined;

  constructor(
    public message: string,
    protected messageParams: Object = {},
    protected detail: Object = {},
  ) {
    super(message);
  }
}
