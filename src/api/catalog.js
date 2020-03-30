import axios from 'axios';

export default axios.create({
  baseURL: 'https://connect.squareup.com/v2/catalog',
  headers: {
    Authorization:
      'Bearer EAAAEKgKUWe8QyZMfCv7wBYI4vTby-h9jsnHgc31rtYInJg8zfPUYS9ufQnDUask',
  },
});
