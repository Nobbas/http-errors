import { Replacements } from 'i18n';

export interface ErrorResponseObject {
  type: string;
  developerMessage: string;
  userMessage?: string;
  detail?: object;
}
export interface ErrorType {
  type: string;
  status: HTTPStatus;
}

export type HTTPStatus = 400 | 401 | 403 | 404 | 500;

export interface HTTPErrorParam {
  message?: {
    // TODO: Confirm if the translation key can actually be ever null provided message is optional already.
    translationKey: string | null;
    params?: Replacements;
  };
  detail?: Object;
}
