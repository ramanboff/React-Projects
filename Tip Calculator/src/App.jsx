import { useState } from "react";
import BillInput from "./components/BillInput";
import Output from "./components/Output";
import Reset from "./components/Reset";
import SelectProcentage from "./components/SelectProcentage";

function App() {
  const [billInput, setBillInput] = useState("");
  const [yourProsentage, setYourProsentage] = useState(0);
  const [friendsProsentage, setFriendsProsentage] = useState(0);

  const tip =  billInput * ((yourProsentage + friendsProsentage)/2/100)
  const commonBill =  billInput + tip

  function handleReset () {
    setBillInput("")
    setYourProsentage("")
    setFriendsProsentage("")
  }


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
    {billInput && (
      <>
        <Output
        setBillInput={setBillInput}
        billInput={billInput}
        yourProsentage={yourProsentage}
        friendsProsentage={friendsProsentage}
        tip={tip}
        commonBill={commonBill}
      />
      <Reset handleReset={handleReset}/>
      </>
    )}
    </>
  );
}

export default App;
