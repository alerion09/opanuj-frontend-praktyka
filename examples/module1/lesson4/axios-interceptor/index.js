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

const {
  data: articles,
} = await axios.get('/api/data/articles?timeout=3000');

document.querySelector('#data').innerHTML = articles?.[0]?.content;
