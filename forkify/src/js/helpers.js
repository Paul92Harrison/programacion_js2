import { TIMEOUT_SEC } from './config';
export const getJSON = async function (url) {
  const fetchPro = await fetch(url);
  const resp = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
  const data = await resp.json();

  if (!resp.ok) {
    throw new Error('Error');
  }

  return data;
};