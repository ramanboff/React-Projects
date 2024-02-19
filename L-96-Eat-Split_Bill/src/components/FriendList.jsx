import Friends from "./Friends";

const FriendList = ({ friend}) => {
  return (
    <ul>
      {friend&&friend.map((friend) => (
        <Friends friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};

export default FriendList;
