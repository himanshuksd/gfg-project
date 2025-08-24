import logo from './logo.svg';
import './App.css';


// functional componeent



const Header = () => {
  return (
    <div style = { {backgroundColor: 'gray' ,display:'flex' } }>
  <h1 className='h1'>Shopify app</h1>
  <input placeholder='search'/>
  <ul style ={{display:'flex'}}>
    <li>Home</li>
    <li>about</li>
    <li>contact</li>
  </ul>

    </div>
  )
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
function App() {
  return (
      <Header/>
  );
}

export default App;
