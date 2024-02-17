import { useState } from "react";
import BillInput from "./components/BillInput";
import Output from "./components/Output";
import Reset from "./components/Reset";
import SelectProcentage from "./components/SelectProcentage";

function App() {
  const [billInput, setBillInput] = useState(0);
  const [yourProsentage, setYourProsentage] = useState("0");
  const [friendsProsentage, setFriendsProsentage] = useState("0");

  return (
    <>
      <BillInput billInput={billInput} setBillInput={setBillInput} />
      <SelectProcentage
        setProsentage={setYourProsentage}
        prosentage={yourProsentage}
      >
        How did you like the service?
      </SelectProcentage>
      <SelectProcentage
        prosentage={friendsProsentage}
        setProsentage={setFriendsProsentage}
      >
        How did your friend like like the service?
      </SelectProcentage>
      <Output
        setBillInput={setBillInput}
        billInput={billInput}
        yourProsentage={yourProsentage}
        friendsProsentage={friendsProsentage}
      />
      <Reset />
    </>
  );
}

export default App;
