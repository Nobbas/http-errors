import { expect } from 'chai';
import { HTTPBadRequestError } from '../../src/errors/http-bad-request-error';

describe('HTTPBadRequestError', () => {
  it('should be valid error object', async () => {
    const badRequestError = new HTTPBadRequestError('check');
    expect(badRequestError).to.be.a.instanceOf(HTTPBadRequestError);
    const respObject = badRequestError.getResponseErrorObject();

    throw badRequestError;
  });
});
