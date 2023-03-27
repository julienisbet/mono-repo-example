import { useEffect, useState } from 'react';

export default function App() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch('/api/example');
      const data = await resp.json();
      console.log(data);
      setMessage(data.message);
    };
    fetchData();
  }, []);
  return <h1> {message}</h1>;
}
