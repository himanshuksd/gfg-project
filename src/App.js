import logo from './logo.svg';
import './App.css';


// functional componeent


const products = [{id:"1",item:'Shirt'},{id:"2", item:'shorts'},{id:"3", item:'T-shirts'},{id:"4",item:'pants'}];



function App() {

 
  


  return (
    <>
   <h1>Hello and welcome</h1>
   <ul>
   {
    products.map(product => {
      return (
<li 
  className={`${product.id % 2 === 0 ? "bg-color" : ""} pd-8px`} 
  key={product.id}
>
  {product.item}
</li>
      )
   })
  } 
    </ul>
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