import './style.css';
import picture1 from '../../Picture/picture1.jpg'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { router } from '../../Config';

function App() {
  const routerProvider = createBrowserRouter(router)
  return (
    <div  style={{ backgroundImage: `url(${picture1}) `, backgroundSize: 'cover ' }} className='app'>


      <RouterProvider router={routerProvider} />

      
    </div>


  );
}

export default App;
