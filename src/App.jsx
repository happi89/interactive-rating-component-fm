import './index.css';
import Rating from './Rating';
import ThankYou from './ThankYou';
import { useState } from 'react';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function toggleComponent() {
    setIsSubmitted(prevIsSubmitted => !prevIsSubmitted)
  };

  return (
    <div className="App">
      <div className="card">
        { !isSubmitted && <Rating toggleComponent={toggleComponent} /> }
        { isSubmitted && <ThankYou/> }
      </div>
    </div>
  )
}

export default App
