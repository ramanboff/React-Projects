import React from 'react'
import Button from './Button';

const FormAddFriends = () => {
  return (
<form className='form-add-friend'>
  <label>🧑‍🤝‍🧑Friend Name</label>
  <input type="text" />
  <label>📷Image URL</label>
  <input type="text" />
  <Button>Add</Button>
  <Button>Add Friend</Button>
</form>
  )
};

export default FormAddFriends;