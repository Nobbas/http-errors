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

  getResponseErrorObject(translator: i18nAPI): ErrorResponseObject {
    const translatedMessage = translator.__(
      this.translationKey,
      this.messageParams,
    );

    if (translatedMessage === this.translationKey) {
      throw new TranslationNotFoundError(this.translationKey);
    }

    const response: ErrorResponseObject = {
      type: this.type,
      userMessage: translatedMessage,
      developerMessage: 'Something went wrong. Please check backend logs.',
    };

    const hasDetails = Object.keys(this.detail).length > 0;
    if (hasDetails) {
      response.detail = this.detail;
    }

    return response;
  }
}
