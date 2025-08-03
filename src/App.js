import logo from './logo.svg';
import './App.css';


// functional componeent



const Button = () =>  <button> Submit Button </button>

const Search = () => <input placeholder='search your fav product...'/>


function MyButton() {
  return(
    <>
    <p> My button component </p> 
    <button>submit button </button>  
    <div><Search/></div>
    </>
  )
}
function App() {
  return (
    <>
    <div className="App">
     <h1>Hello my name is prakash</h1> 
     <MyButton />
    </div>
    
    </>
  );
}

export default App;
