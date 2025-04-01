import axios from 'axios';

let startTime = 0;

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  startTime = new Date().getTime();

  return config;
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  const requestTime = new Date().getTime() - startTime;
  console.log(`Request to ${response.config.url} took ${requestTime}ms`);
  startTime = 0;

  return response;
});

const { data: articles } = await axios.get('/api/data/articles?timeout=3000');

const globalFetch = new Proxy(fetch, {
  apply: async (target, thisArg, argumentsList) => {
    const [url] = argumentsList;
    const startTimeFetch = performance.now();

    try {
      const response = await target.apply(thisArg, argumentsList);
      const requestTime = performance.now() - startTimeFetch;
      console.log(`Request to ${url} took ${requestTime}ms`);

      return response;
    } catch (e) {
      const requestTime = performance.now() - startTimeFetch;
      console.log(`Request to ${url} took ${requestTime}ms`);

      throw e;
    }
  },
});

const articlesFetchResult = await globalFetch(
  '/api/data/articles?timeout=3000'
);
const articlesFetch = await articlesFetchResult.json();

document.querySelector('#data').innerHTML = articles?.[0]?.content;
document.querySelector('#data-fetch').innerHTML = articlesFetch?.[0]?.content;
