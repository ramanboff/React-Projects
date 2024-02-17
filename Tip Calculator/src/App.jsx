import { useState } from "react";
import BillInput from "./components/BillInput";
import Output from "./components/Output";
import Reset from "./components/Reset";
import SelectProcentage from "./components/SelectProcentage";


function App() {
  const [billInput, setBillInput] = useState(0);
  const [yourProsentage, setYourProsentage] = useState("dissatisfied");
  const [friendsProsentage, setFriendsProsentage] = useState("dissatisfied");



  return (
    <>
      <BillInput billInput={billInput} setBillInput={setBillInput} />
      <SelectProcentage
        title="How did you like the service?"
        setProsentage={setYourProsentage}
        prosentage={yourProsentage}
      />
      <SelectProcentage
        title="How did your friend like like the service?"
        prosentage={friendsProsentage}
        setProsentage={setFriendsProsentage}
      />
      <Output setBillInput={setBillInput} billInput={billInput} yourProsentage={yourProsentage} friendsProsentage={friendsProsentage}/>
      <Reset />
    </>
  );
}

export default App;
