

const Output = ({billInput,setBillInput,yourProsentage, friendsProsentage, }) => {
if(yourProsentage === 'ok') setBillInput((s) => s+3 )


  return (
    <div>
      <span>`You Pay  (${billInput} + $12 tip)</span>
    </div>
  )
}

export default Output