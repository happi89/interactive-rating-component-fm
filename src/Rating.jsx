import './index.css';
import Button from './Button';

const Rating = ({toggleComponent}) => {

  // const {rating, setRating} = useState("");

  return (  
    <div className='rating-container'>
      <div className="star-container">
        <img className="start" src="../images/icon-star.svg" alt="star" />
      </div>

      <h1>How did we do?</h1>

      <p>Please let us know how we did with your support request. All feedback is appreciated 
      to help us improve our offering!</p>

      <ul>
        <li><Button number={1} /></li>
        <li><Button number={2} /></li>
        <li><Button number={3} /></li>
        <li><Button number={4} /></li>
        <li><Button number={5} /></li>
      </ul>

      <button className="submit" onClick={toggleComponent}>SUBMIT</button>
    </div>
  );
}

export default Rating;