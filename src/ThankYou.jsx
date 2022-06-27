import './index.css';

const ThankYou = ({}) => {

  return (  
    <div className="thank-you-container">
        <img src="../images/illustration-thank-you.svg" alt="thank you" />  

      <div className="star-selected-container">
        <p className="stars-selected">You selected {} out of 5</p>
      </div>

      <h2 className="thank-you-text">Thank you!</h2>

      <p className="appreciation">We appreciate you taking the time to give a rating. If you ever need more support, 
      don't hesitate to get in touch!</p>
    </div>
  );
}

export default ThankYou;