import './ButtonSelectAllItem.css'

function ButtonSelectAllItem(props) {
  const buttonSelectAllItem = ['buttonSelectAllItem'];
  if (!props.flag) {
    buttonSelectAllItem.push('buttonSelectAllItemHover');
  }

  return (
    <button className={buttonSelectAllItem.join(' ')} onClick={props.markAllTasksHandler} />
  )
}

export default ButtonSelectAllItem