import classes from './ButtonMark.module.css'



function ButtonMark(props) {
  let checked
  if (props.completed) {
    checked = 'checked'
  }

  return (
    <input
      id={props.id}
      onChange={props.checkedHandler}
      type='checkbox'
      className={classes.ButtonMark}
      checked={checked}
    />
  )
}

export default ButtonMark