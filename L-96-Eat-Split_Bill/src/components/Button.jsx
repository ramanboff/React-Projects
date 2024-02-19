import React from 'react'

const Button = ({children,handleShowAddFriends}) => {
  return (
    <button onClick={handleShowAddFriends} className="button">{children}</button>
  )
}

export default Button