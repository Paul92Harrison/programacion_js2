import { TIMEOUT_SEC } from './config.js';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

const getJSON = async function (url) {
  const fetchPro = fetch(url);

  const resp = await Promise.race([
    fetchPro,
    timeout(TIMEOUT_SEC),
  ]);

  const data = await resp.json();

  if (!resp.ok) {
    throw new Error('Error');
  }

  return data;
};

export { getJSON };