import './TaskSheet.css'
import ButtonMark from '../button/ButtonMark/ButtonMark'
import ButtonDel from '../button//ButtonDel/ButtonDel'

function TaskSheet(props) {
  const text = ['text'];
  if (props.completed) {
    text.push('decoration');
  }

  return (
    <div className='TaskSheet' id={props.id} >
      <ButtonMark checkedHandler={props.checkedHandler} completed={props.completed} />
      <p className={text.join(' ')}>{props.name}</p>
      <ButtonDel delTask={props.delTask} />
    </div >
  )
}

export default TaskSheet;