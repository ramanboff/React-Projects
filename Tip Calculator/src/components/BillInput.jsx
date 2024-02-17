

const Bill = ({billInput, setBillInput}) => {



  return <div>
   <span>How mutch was the bill?</span>
   <input type="number" value={billInput} onChange={(e) => setBillInput(e.target.value)} />
  </div>;
};

export default Bill;
