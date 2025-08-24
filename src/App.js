import logo from './logo.svg';
import './App.css';


// functional componeent

var count = 0;

var inputText = '';

function App() {

  const handleIncrementClick = () => {
    count = count + 1;
    console.log({count});
  }
    
  const onSearchChange = (event) => {
    console.log(event.target.value);
    inputText = event.target.value;

  }


  return (
    <>
    <h1>JSX</h1>
    <button id ='btn' onClick= {handleIncrementClick}>Increment</button>
    {count}
    <div> <input onChange = {onSearchChange} placeholder='Search....' /></div>
    {inputText}
   
    </>
  );
}






/*function MyButton() {
  return(
    <>
    <p> My button component </p> 
    <button>submit button </button>  
    <div><Search/></div>
    </>
  )
}*/


export default App;
