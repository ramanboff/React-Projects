import { useState } from "react";
import Button from "./components/Button";
import FormAddFriends from "./components/FormAddFriends";
import FormSplitBill from "./components/FormSplitBill";
import FriendList from "./components/FriendList";
import { v4 as uuidv4 } from "uuid";

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
    setShowAddFriends((isOpen) => !isOpen);
  };

  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  const [friend, setFriend] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);


  const addFriends = (newFriend) => {
    if (name || image) setFriend([...friend, newFriend]);
    setShowAddFriends(false);
  };

  //Select

  const handleSubmit = (e) => {
    const id = uuidv4();
    e.preventDefault();
    const newFriendObj = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    addFriends(newFriendObj);
    setName("");
    setImage("https://i.pravatar.cc/48");
  };

  

  function handleSelection(friend) {
    setSelectedFriend(friend);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friend={friend} onClick={handleSelection}  />
        {showAddFriends && (
          <FormAddFriends
            initialFriends={initialFriends}
            handleSubmit={handleSubmit}
            setName={setName}
            setImage={setImage}
            name={name}
            image={image}
          />
        )}
        <Button onClick={handleShowAddFriends}>
          {showAddFriends ? "Close" : "Add Friend"}
        </Button>
      </div>
      { selectedFriend&&<FormSplitBill selectedFriend={selectedFriend} />}
    </div>
  );
};
