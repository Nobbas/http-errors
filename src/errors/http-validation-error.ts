import { HTTPError } from './http-error';
import { HTTPStatusCode } from '../enums/http-status-code';
import { HTTPErrorType } from '../enums/http-error-type';

export class HTTPValidationError extends HTTPError {
  public status: HTTPStatusCode = HTTPStatusCode.VALIDATION_ERROR;
  public type: HTTPErrorType = HTTPErrorType.VALIDATION_ERROR;
}
