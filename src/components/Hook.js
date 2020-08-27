import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://yts.mx/api/v2/list_movies.json';

const Hook = ({ hello }) => {
  const [count, setCount] = useState(0);

  console.log('hello:', hello);
  useEffect(() => {
    const call = async () => {
      const {
        data: { data: movies = [] }
      } = await axios.get(`${API_URL}?sort_by=rating`);
      console.log(movies);
    };

    call();
    document.title = `업데이트 횟수 ${count}`;
  }, [hello]);
  return <button onClick={() => setCount(count + 1)}>increase</button>;
};

export default Hook;
