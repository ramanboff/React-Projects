import BillInput from "./components/BillInput";
import Output from "./components/Output";
import Reset from "./components/Reset";
import SelectProcentage from "./components/SelectProcentage";


function App() {



  return <>
  <BillInput/>
  <SelectProcentage title="How did you like the service?"/>
  <SelectProcentage title="How did your friend like like the service?"/>
  <Output/>
  <Reset/>
  </>;
}

export default App;
