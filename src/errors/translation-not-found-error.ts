export class TranslationNotFoundError extends Error {
  constructor(key: string) {
    super(`Make sure the translation for ${key} exists`);
  }
}
