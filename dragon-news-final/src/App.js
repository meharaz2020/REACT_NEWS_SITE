import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
     <RouterProvider router={routes}>

     </RouterProvider>
     <Toaster></Toaster>

    </>
  );
}

export default App;
