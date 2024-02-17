

const SelectProcentage = ({title}) => {
  return (
    <div>
      <span>{title}</span>
      <select>
        <option value="">Dissatisfied (0%)</option>
        <option value="">It was Ok (5%)</option>
        <option value="">It was good (10%)</option>
        <option value="">Absolutely amazing! (20%)</option>
      </select>
    </div>
  )
}

export default SelectProcentage