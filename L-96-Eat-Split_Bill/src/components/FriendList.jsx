import Friends from "./Friends";

const FriendList = ({ friend,onClick, selectedFriend}) => {


  return (
    <ul>
      {friend.map((friend) => (
        <Friends  friend={friend} selectedFriend={selectedFriend} key={friend.id} onClick={onClick}  />
      ))}
    </ul>
  );
};

export default FriendList;
