import Button from './Button'
import {useState} from 'react'
import CustomCheckbox from './CustomCheckbox'
import CustomDate from './CustomDate'
 
const AddTask = ({className, onAdd}) => {

  //Component local States -----------------------
  const [title, SetTitle] = useState('')
  const [day, setDay] = useState(() => {
    let today = new Date();
    return today.toDateString()
  })
  const [reminder, setReminder] = useState(false)

  //Form on Submit -------------------------------
  const onSubmit = (e) => {
    e.preventDefault()
    if(!title){
      alert('please add title')
      return
    }
    onAdd({title, day, reminder})  //Here desconstructor used instead of task object
    SetTitle('');
  }

  return (
    <form className={`addform flex ${className}`} onSubmit={onSubmit}>
        <input  
          type="text" 
          placeholder="Enter your mission" 
          value={title}
          onChange={(e) => SetTitle(e.target.value)} />
        <CustomDate setDay={setDay} />
        <CustomCheckbox checked={reminder} onToggle={setReminder} />
        <Button title='add' />
    </form>
  )
}

export default AddTask