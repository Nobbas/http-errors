import { expect } from 'chai';
import { HTTPBadRequestError } from '../../src/errors/http-bad-request-error';
import * as i18n from 'i18n';
import * as path from 'path';

let translatorObj: any = {};
const translationKey = 'hello';

before(() => {
  const locales = ['en', 'fr'];
  i18n.configure({
    locales,
    directory: path.resolve(__dirname, '../locales'),
    register: translatorObj,
  });
});

describe('HTTPBadRequestError', () => {
  it('Should create HTTPBadRequestError object with translated user message in english.', async () => {
    translatorObj.setLocale('en');
    const badRequestError = new HTTPBadRequestError(translationKey);
    expect(badRequestError).to.be.a.instanceOf(HTTPBadRequestError);
    const respObject = badRequestError.getResponseErrorObject(translatorObj);
    expect(respObject.type).to.be.equal('BAD_REQUEST');
    expect(respObject.userMessage).to.be.equal(
      translatorObj.__(translationKey),
    );
  });
});

describe('HTTPBadRequestError', () => {
  it('Should create HTTPBadRequestError object with translated user message in french', async () => {
    translatorObj.setLocale('fr');
    const badRequestError = new HTTPBadRequestError('hello');
    expect(badRequestError).to.be.a.instanceOf(HTTPBadRequestError);
    const respObject = badRequestError.getResponseErrorObject(translatorObj);
    expect(respObject.type).to.be.equal('BAD_REQUEST');
    expect(respObject.userMessage).to.be.equal(
      translatorObj.__(translationKey),
    );
  });
});
