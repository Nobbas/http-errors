import { ErrorType } from '../models/models';

export const BAD_REQUEST: ErrorType = {
  type: 'BAD_REQUEST',
  status: 400,
};

export const UNAUTHORIZED: ErrorType = {
  type: 'UNAUTHORIZED',
  status: 401,
};

export const FORBIDDEN: ErrorType = {
  type: 'FORBIDDEN',
  status: 403,
};

export const RESOURCE_NOT_FOUND: ErrorType = {
  type: 'RESOURCE_NOT_FOUND',
  status: 404,
};

export const ROUTE_NOT_FOUND: ErrorType = {
  type: 'ROUTE_NOT_FOUND',
  status: 404,
};

export const INTERNAL_SERVER_ERROR: ErrorType = {
  type: 'INTERNAL_SERVER_ERROR',
  status: 500,
};
