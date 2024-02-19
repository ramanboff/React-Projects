import { useState } from "react";
import Button from "./components/Button";
import FormAddFriends from "./components/FormAddFriends";
import FormSplitBill from "./components/FormSplitBill";
import FriendList from "./components/FriendList";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export const App = () => {
  const [showAddFriends, setShowAddFriends] = useState(false);

  const handleShowAddFriends = () => {
    setShowAddFriends((isOpen)  => !isOpen )
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList initialFriends={initialFriends} />
        {showAddFriends && <FormAddFriends />}
        <Button handleShowAddFriends={handleShowAddFriends}>Add Friend</Button>
      </div>
      <FormSplitBill />
    </div>
  );
};
