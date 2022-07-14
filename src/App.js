import Home from "./components/Home/Home";
import Navbar from "./SharedComponent/Navbar/Navbar";
import { Toaster } from 'react-hot-toast';

 

function App() {
  return (
    <div>
       <Navbar></Navbar>
       <Home></Home>
       <Toaster />
    </div>
  );
}

export default App;
