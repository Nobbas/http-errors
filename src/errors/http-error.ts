import { Replacements } from 'i18n';
import { TranslationNotFoundError } from './translation-not-found-error';
import { InvalidTranslationKeyError } from './invalid-translation-key-error';
import { BAD_REQUEST } from '../utils/error-types';
import { ErrorResponseObject, HTTPStatus } from '../types';

export abstract class HTTPError extends Error {
  public status: HTTPStatus = BAD_REQUEST.status;
  public type: string = BAD_REQUEST.type;
  public statusMessage: string = 'Nobbas error';

  constructor(
    protected translationKey: string,
    protected messageParams: Replacements = {},
    protected detail: Object = {},
  ) {
    super();
    this.message = `${this.constructor.name} - ${translationKey}`;

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    // ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, HTTPError);
    }
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

  getResponseErrorObject(translatorFunction: Function): ErrorResponseObject {
    const translatedMessage = translatorFunction(
      this.translationKey,
      this.messageParams,
    );

    if (translatedMessage === this.translationKey) {
      throw new TranslationNotFoundError(this.translationKey);
    }

    const stackToDev = this.stack ? this.stack : this.toString();

    const response: ErrorResponseObject = {
      type: this.type,
      userMessage: translatedMessage,
      developerMessage: stackToDev,
    };

    const hasDetails = Object.keys(this.detail).length > 0;
    if (hasDetails) {
      response.detail = this.detail;
    }

    return response;
  }
}
