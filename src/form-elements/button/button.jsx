const Button = ({type, classnames, children}) => {
  return (
    <button type={type} className={classnames}>{children}</button>
  )
}

export default Button