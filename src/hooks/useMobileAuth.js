import {useState} from 'react';
import mobileAuth from '../api/mobileAuth';

export default () => {
  const [auth, setAuth] = useState({});

  const getAuth = async () => {
    try {
      const response = await mobileAuth.post('/authorization-code', {
        location_id: 'WKGVF3FAB3HAN',
      });
      setAuth(response.data);
    } catch (err) {
      null;
    }
  };
  return [auth, getAuth];
};
