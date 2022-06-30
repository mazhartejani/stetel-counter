/* eslint-disable max-len */
import { settings } from '../Settings';
import {
  getData,
} from './ApiCalls';

export const getJoke = async () => {
  try {
    const response = await getData(`${settings.jokesUrl}`);
    return response;
  } catch (err) {
    return null;
  }
};
