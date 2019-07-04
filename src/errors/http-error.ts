import { Replacements } from 'i18n';
import { TranslationNotFoundError } from './translation-not-found-error';
import { InvalidTranslationKeyError } from './invalid-translation-key-error';
import { HTTPStatusCode } from '../enums/http-status-code';
import { HTTPErrorType } from '../enums/http-error-type';
import { ErrorResponseObject } from '../models/error-response-object';

export abstract class HTTPError extends Error {
  public status: HTTPStatusCode = HTTPStatusCode.REGULAR;
  public type: HTTPErrorType = HTTPErrorType.REGULAR;
  public statusMessage: string = 'Nobbas error';

  constructor(
    protected translationKey: string,
    protected messageParams: Replacements = {},
    protected detail: Object = {},
  ) {
    super();
    this.message = `${this.constructor.name} - ${translationKey}`;
    if (this.isInvalidTranslationKey()) {
      throw new InvalidTranslationKeyError(this.translationKey);
    }
  }

  private isInvalidTranslationKey(): boolean {
    const word = '[a-z0-9]+';
    const key = `${word}(_${word})*`;
    const regex = new RegExp(`^${key}(\.${key})*$`);
    return this.translationKey.match(regex) === null;
  }

  getResponseErrorObject(i18n: i18nAPI): ErrorResponseObject {
    const translatedMessage = i18n.__(this.translationKey, this.messageParams);

    if (translatedMessage === this.translationKey) {
      throw new TranslationNotFoundError(this.translationKey);
    }

    const response: ErrorResponseObject = {
      message: translatedMessage,
      type: this.type,
    };

    const hasDetails = Object.keys(this.detail).length > 0;
    if (hasDetails) {
      response.detail = this.detail;
    }

    return response;
  }
}
