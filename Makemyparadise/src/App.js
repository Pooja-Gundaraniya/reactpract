import './App.css';
import Login from './components/login';
import Dashboard from "./components/dashboard"
// import Saas from "./components/saas"
// import Birthday from './components/birthdayreminder';
// import Home from './bootstrap/home';
// import Hooks from './components/hooks';
import Chakra from './components/chakraui/chkraui';
import {ChakraProvider, ColorModeScript} from "@chakra-ui/react"
import Theme from "../src/components/chakraui/theame";
import { myNewTheme } from './components/chakraui/custome';



function App() {
  return (
   <>
   {/* <Login/>  */}
   {/* <Dashboard/> */}
   {/* <Saas/> */}
   {/* <Birthday/> */}
   {/* <Home/> */}
   
     <ChakraProvider theme={myNewTheme}>
    {/* <ColorModeScript initialColorMode="light"/> */}
   {/* <Chakra/> */}
      <Theme/>
     </ChakraProvider>

   </>
  );
}

export default App;
