import logo from './logo.svg';
import './App.css';


// functional componeent

const isAdmin = true;

const isLoading = false;

function Loader () {
  return (
    <h3>Loading......</h3>
  )
}

function App() {

 
  


  return (
    <>
   <h1>Hello and welcome</h1>
   {
    isAdmin ? <h2>This is the Admin Portal </h2> : <h2> This is the User Portal </h2>

   }
   {
    isLoading ? <h3>Page Loaded</h3> : <Loader/>
   }
   <h2> This is the Admin Portal </h2>
   <h3> This is the User Portal </h3>
   
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