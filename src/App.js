
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Cart from './components/Cart/Cart';
import Shop from './components/Shop/Shop';
import Product from './components/Product/Product';
import Order from './components/Order/Order';
import Inventory from './components/Inventoy/Inventory';
import About from './components/About/About';
import { productsAndCartLoader } from './Loaders/productsAndCartLoader';
function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader:()=> fetch('products.json'),
          element:<Shop></Shop>
        },
        {
          path:'shop',
          loader:()=> fetch('products.json'),
          element:<Shop></Shop>
        },
        {
          path:'/product',          
          element:<Product></Product>
        },
        {
          path:'order',
          loader:productsAndCartLoader,
          element:<Order></Order>
        },
        {
          path:'inventory',
          element:<Inventory></Inventory>
        },

        
      ],    
      
    },
    {
      path:'about',
      element:<About></About>
    }
  ])

  return (
    <div className="App">
     
      <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
