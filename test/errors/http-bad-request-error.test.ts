import { expect } from 'chai';
import { HTTPBadRequestError } from '../../src/errors/http-bad-request-error';
import * as i18n from 'i18n';
import * as path from 'path';

function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

const locales = ['en', 'fr'];
// const selectedLocale = locales[getRandomInt(1)];
const selectedLocale = 'en';

before(() => {
  i18n.configure({
    locales,
    directory: path.resolve(__dirname, '../locales'),
  });
  i18n.setLocale(selectedLocale);
});

describe('HTTPBadRequestError', () => {
  it('Should create HTTPBadRequestError object with translated user message.', async () => {
    const badRequestError = new HTTPBadRequestError('hello');
    expect(badRequestError).to.be.a.instanceOf(HTTPBadRequestError);
    const respObject = badRequestError.getResponseErrorObject(i18n.__);
    expect(respObject.type).to.be.equal('BAD_REQUEST');
    expect(respObject.userMessage).to.be.equal('Hello');
  });
});
