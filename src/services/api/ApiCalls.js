import { get } from 'axios';
import { settings as s } from '../Settings';


const getUrl = async ep => {
  return `${s.baseUrl}${ep}`;
};

export const getData = async (relativeUrl) => {
  const url = await getUrl(relativeUrl);
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }
  };
  try {
    const response = await get(url, options).then(res => res);
    return { status: response.status, data: response.data };
  } catch (err) {
    if (err.response) {
      return { status: err.response.status, data: [] };
    }
    return { status: 0, data: [] };
  }
};
