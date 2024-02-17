
const Friends = ({friend}) => {
  return (
    <li>
      <img src={friend.image} />
      <h3>{friend.name}</h3>
  {friend.balance <0 && <p className="red">You owe {friend.name}{friend.balance}$</p>}
  {friend.balance >0 && <p className="green">{friend.name} owes you {friend.balance}$</p>}
  {friend.balance === 0 && <p>You and {friend.name} are even</p>}
  
    </li>
  )
}

export default Friends