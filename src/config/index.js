const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'URL da API online';

export default {
  URL,
};
