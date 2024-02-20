
import { useState } from "react";
import Button from "./Button";

const Friends = ({ friend, onClick,bgColor }) => {



  return (
    <li>
      <img src={friend.image} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name}
          {friend.balance}$
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {friend.balance}$
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
   <Button friend={friend} onClick={onClick}>Select</Button>
    </li>
  );
}

export default Friends;
