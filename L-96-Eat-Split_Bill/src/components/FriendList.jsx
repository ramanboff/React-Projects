import Friends from "./Friends";

const FriendList = ({ friend,onClick}) => {


  return (
    <ul>
      {friend.map((friend) => (
        <Friends friend={friend} key={friend.id} onClick={onClick} />
      ))}
    </ul>
  );
};

export default FriendList;
