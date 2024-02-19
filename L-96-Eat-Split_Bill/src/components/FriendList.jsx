import Friends from "./Friends";

const FriendList = ({ friend, onSelection}) => {


  return (
    <ul>
      {friend.map((friend) => (
        <Friends friend={friend} key={friend.id} onSelection={onSelection} />
      ))}
    </ul>
  );
};

export default FriendList;
