import axios from 'axios';

export default axios.create({
  baseURL: 'https://connect.squareup.com/v2/catalog',
  headers: {
    Authorization:
      'Bearer EAAAEA9zeHF-fS0vmz37SJf-obc_lwdrV65acY1h35vcdG8LW3UZR9A0xob-8e3k',
  },
});
