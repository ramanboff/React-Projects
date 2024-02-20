

import Button from "./Button";


const FormSplitBill = ({selectedFriend}) => {
  return (
    
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💰Bill Value</label>
      <input type="text" />
      <label>🕴🏽Your expense</label>
      <input type="text" disabled  />
      <label>🧑‍🤝‍🧑{selectedFriend.name}'s expense</label>
      <input type="text"/>
      <label>🤑 Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
};

export default FormSplitBill;
