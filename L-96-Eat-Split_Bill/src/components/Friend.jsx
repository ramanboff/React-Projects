
const Friends = ({friend}) => {
  return (
    <li>
      <img src={friend.image} />
      <h3>{friend.name}</h3>
      <div>{friend.balance}</div>
    </li>
  )
}

export default Friends