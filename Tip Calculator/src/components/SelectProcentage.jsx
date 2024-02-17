


const SelectProcentage = ({title, prosentage, setProsentage}) => {





  return (
    <div>
      <span>{title}</span>
      <select value={prosentage} onChange={(e) => setProsentage(e.target.value)}>
        <option value="dissatisfied">Dissatisfied (0%)</option>
        <option value="ok">It was Ok (5%)</option>
        <option value="good">It was good (10%)</option>
        <option value="amazing">Absolutely amazing! (20%)</option>
      </select>
    </div>
  )
}

export default SelectProcentage