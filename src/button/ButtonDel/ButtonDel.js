import classes from './ButtonDel.module.css'

function ButtonDel(props) {

  return (
    <button className={classes.ButtonDel} onClick={props.delTask} />
  )
}

export default ButtonDel