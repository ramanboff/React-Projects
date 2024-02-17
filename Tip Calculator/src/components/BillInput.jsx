import { useState } from "react";

const Bill = () => {

const [billInput, setBillInput] = useState(0)

  return <div>
   <span>How mutch was the bill?</span>
   <input type="number" value={billInput} onChange={(e) => setBillInput(e.target.value)} />
  </div>;
};

export default Bill;
