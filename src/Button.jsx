import './index.css';

const Button = ({number}) => {

  return (  
    <button onClick={() => console.log(number)}>{number}</button>
  );
}

export default Button;