import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('api/stock-prices')
    .then((res) => res.json())
    .then(items => setData([...items]));
  });
  
  const listData = data.map((stock) => 
    <li key={stock.id}>
      {stock.name}
    </li>
  );

  return (
    <ol>
    {listData}
    </ol>
  );
}

render(<App/>, document.getElementById('app'));
