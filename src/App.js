import { useState, useEffect } from 'react';
import './App.css';

// const Person = (props) => {
//   return (
//     <>
//       <h1>Name: {props.name}</h1>
//       <h2>Surname: {props.surname}</h2>
//       <h2>Visible: {props.visible}</h2>
//     </>
//   );
// }

const App = () => {
  // const name = 'jack';
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // alert('reload');
    setCounter(100);
  }, []);

  return (
    <div className="App">
      {/* <h1>Hello, {name}!</h1> */}
      {/* <Person name="John" surname="Cena" visible="false"/>
      <Person name="Jane" surname="Doe" visible="true"/>
      <Person name="Ok" surname="cool" visible="true"/> */}
      <button onClick={ () => setCounter( (prevCount) => prevCount-1 ) }>-</button>
      <h1>{counter}</h1>
      <button onClick={ () => setCounter( (prevCount) => prevCount+1 ) }>+</button>
    </div>
  );
}

export default App;
