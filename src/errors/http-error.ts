import { Replacements } from 'i18n';
import { ExtendableError } from 'ts-error';
import { TranslationNotFoundError } from './translation-not-found-error';
import { InvalidTranslationKeyError } from './invalid-translation-key-error';
import {
  ErrorResponseObject,
  HTTPStatus,
  ErrorType,
  HTTPErrorParam,
} from '../models/models';

const isInvalidTranslationKey = (translationKey: string): boolean => {
  const word = '[a-z0-9]+';
  const key = `${word}(_${word})*`;
  const regex = new RegExp(`^${key}(\.${key})*$`);
  return translationKey.match(regex) === null;
};

/**
 * Base HTTPError class for all HTTP Errors.
 * No object is to be created using this class as it's apparently ABSTRACT
 */
export abstract class HTTPError extends ExtendableError implements ErrorType {
  public abstract status: HTTPStatus;
  public abstract type: string;
  public statusMessage: string = 'Nobbas error';

  private translationKey: string | null = null;
  private messageParams: Replacements = {};
  private detail: Object = {};

  constructor(params: HTTPErrorParam = {}) {
    super();

    if (params.message) {
      this.translationKey =
        params.message.translationKey || this.translationKey;
      this.messageParams = params.message.params || this.messageParams;
    }

    this.detail = params.detail || this.detail;

    this.message = `${this.constructor.name} - ${this.translationKey || ''}`;

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    // ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, HTTPError);
    }

    if (this.translationKey && isInvalidTranslationKey(this.translationKey)) {
      throw new InvalidTranslationKeyError(this.translationKey);
    }
  }

  /**
   * Translates and substitutes translation replacement parameters if any translationKey
   * exists in the error that is to be sent to the end user.
   * @param translator
   */
  getResponseErrorObject(translator: i18nAPI): ErrorResponseObject {
    const stackToDev = this.stack ? this.stack : this.toString();

    const response: ErrorResponseObject = {
      type: this.type,
      developerMessage: stackToDev,
    };

    if (this.translationKey) {
      const translatedMessage = translator.__(
        this.translationKey,
        this.messageParams
      );

      if (translatedMessage === this.translationKey) {
        throw new TranslationNotFoundError(this.translationKey);
      }

      response.userMessage = translatedMessage;
    }

    const hasDetails = Object.keys(this.detail).length > 0;
    if (hasDetails) {
      response.detail = this.detail;
    }

    return response;
  }
}
