import "./App.css";
import Person1 from "./Person1";
import Person2 from "./Person2";
import Person3 from "./Person3";
import Person4 from "./Person4";
import Person5 from "./Person5";
import Person6 from "./Person6";
import Person7 from "./Person7";
import Person8 from "./Person8";
import About from "./About";
// eslint-disable-next-line no-unused-vars
import Rainbow from "./hoc/Rainbow";
import {useState} from 'react';
// import Hello from "./Hello";

// const applyBorder = (WrappedComponent) => {
//   return (
//     <div class="border">
//       <WrappedComponent />
//     </div>
//   );
// };
// const modifiedHello = applyBorder(Hello);

function App() {
  return (
    <div className="App">
      {/* <Hello/>
      <div>Hello component after modifying</div>
      <modifiedHello /> */}

      <About />
      {/* <Rainbow component={About}/> */}
      <Person1 />
      <Person2 />
      <Person3 />
      <Person4 />
      <Person5 />
      <Person6 />
      <Person7 />
      <Person8 />
      <HOCRed component={Counter} />
    </div>
  );
}

function HOCRed(props)
{
  return(
  <h2 style={{backgroundColor: 'red', width:100, display: "flex"}}>
    <props.component />
    </h2>);
}

function Counter()
{
const [count,setCount] = useState(0);
   return(
    <div>
      <h3>{count}</h3>
      <button onClick={()=>{setCount(count+1)}}>Update the counter state</button>
    </div>
   )
}

export default App;
