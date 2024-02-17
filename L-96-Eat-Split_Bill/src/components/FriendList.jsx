import Friends from "./Friend";

const FriendList = ({ initialFriends }) => {
  return (
    <ul>
      {initialFriends.map((friend) => (
        <Friends friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};

export default FriendList;
