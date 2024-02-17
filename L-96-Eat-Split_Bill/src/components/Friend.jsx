
const Friends = ({friend}) => {
  return (
    <li>
      <img src={friend.image} />
      <div>{friend.name}</div>
      <div>{friend.balance}</div>
    </li>
  )
}

export default Friends