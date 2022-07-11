import logo from './logo.svg';
import './App.css';
import Count from './components/Count';
import Map from './components/Map';
import Arraymap from './components/Arraymap';
import Userform from './components/Userform';
      {/* /////////life Cycles of Class Components//////// */}
import Staticgetderivedfromstatefromprops from './components/lifecyclemethods/Staticgetderivedfromstatefromprops';
      {/* /////////////Fragments /////// */}
import Reactfragments from './components/lifecyclemethods/Fragments/Reactfragments';
      {/* /////////////Memocomponent /////// */}
import Parent from './Memocomponents.js/Parent';
      {/* /////////////Ref /////// */}
import Ref from './components/Ref/Ref';
import ComponentC from './components/Contexts/ComponentC';
import {UserProvider} from './components/Contexts/Usercontext';





function App() {

  return (
    <div className="App">
      {/* <Count /> */}
      {/* <Map /> */}
      {/* <Arraymap /> */}
      {/* <Userform /> */}

      {/* /////////life Cycles of Class Components//////// */}
      {/* <Staticgetderivedfromstatefromprops /> */}

      {/* /////////////Fragments /////// */}
      {/* <Reactfragments />   */}
      {/* /////////////Memocomponent /////// */}
      {/* <Parent /> */}
      {/* /////////////Ref /////// */}
       {/* <Ref /> */}
      {/* /////////////Context /////// */}
     <UserProvider value="viswas">
     <ComponentC />
     </UserProvider>

    </div>
  );
}

export default App;
