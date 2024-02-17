

const Output = ({billInput, tip, commonBill}) => {



  return (
    <div>
      <span><b>You Pay ${commonBill}  (${billInput} + ${tip} tip)</b></span>
    </div>
  )
}

export default Output