import './App.css';
import { useState } from 'react';

function MyButton() {
  function handleClick() {
    setCount(count + 1);
    alert('You clicked me ' + count + ' times!');
  }

  const [count, setCount] = useState(0);
  const name = "Tereza";

  return (
    <button className="myBtn" onClick={handleClick}>
      I'm a button {name} clicked {count} times
    </button>
  );
}

function MyNameButton(props) {
  return (<button className="myBtn" onClick={() => { alert('You clicked ' + props.myName) }}>I'm a button {props.myName}</button>);
}

export default function App() {
  return (
    <div>
      <div>
        <h1>Welcome to my {name} app</h1>
        <MyButton />
        <MyNameButton myName="Ramez" />
      </div>
      <br />
      <div>
        {listItems}
      </div>
    </div>
  );
}


const name = "Tereza";
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];
const listItems = products.map(product =>
  <li key={product.id} style={{ color: product.isFruit ? 'blue' : 'orange' }}>
    {product.title}
  </li>
);
