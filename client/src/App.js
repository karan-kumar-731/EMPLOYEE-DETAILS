

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import User from './components/getuser/User';
import Add from './components/adduser/Add';
import Update from './components/updateuser/Update';
function App() {
  const routes=createBrowserRouter([
    {
      path:"/",
      element:<User/>
    },
    {
      path:"/Add",
      element:<Add/>

    },
    {
      path:"/edit/:id",
      element:<Update/>

    },
    
    
  ])
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
     
    </div>
  );
}

export default App;
