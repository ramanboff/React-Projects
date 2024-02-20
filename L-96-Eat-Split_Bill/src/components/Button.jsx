

const Button = ({children,onClick, friend}) => {
  return (
    <button onClick={() =>onClick(friend)}  className="button">{children}</button>
  )
}

export default Button