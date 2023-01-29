import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Components/Routes/Routes/Routes';

function App() {
  return (
    <div className="App">
      <div className='max-w-[1440px] mx-auto bg-teal-200'>
        <RouterProvider router={router}></RouterProvider>
        <Toaster></Toaster>
    </div>
    </div>
  );
}

export default App;
