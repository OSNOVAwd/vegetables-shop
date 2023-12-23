const input = ({id, type, classes, name, children,}) => {
  return (
    <div className="input">
      <label htmlFor={id}>{children}</label>
      <input
        type={type}
        className={classes}
        name={name}
      />
    </div>
  )
}

export default input