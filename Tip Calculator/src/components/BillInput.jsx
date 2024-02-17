

const Bill = ({billInput, setBillInput}) => {



  return <div>
   <label>How mutch was the bill?</label>
   <input type="number" value={billInput} onChange={(e) => setBillInput(Number(e.target.value))} />
  </div>;
};

export default Bill;
