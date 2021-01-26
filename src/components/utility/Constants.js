// Constants.js
const prod = {
  url: {
    BASE_URL: 'https://floating-beach-57718.herokuapp.com/'
  }
};
const dev = {
 url: {
  BASE_URL: 'http://localhost:3001/'
 }
};
export const config = process.env.NODE_ENV === 'development' ? dev : prod;
