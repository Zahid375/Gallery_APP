import { useState } from 'react';
import Gallery from './Components/Gallery.jsx';

function App() {
  const [count, setCount] = useState(0);

  return <Gallery />;
}

export default App;
