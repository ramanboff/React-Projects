


const SelectProcentage = ({ prosentage, setProsentage, children}) => {





  return (
    <div>
      <label>{children}</label>
      <select value={prosentage} onChange={(e) => setProsentage(e.target.value)}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was Ok (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  )
}

export default SelectProcentage