import Button from './Button'
import {useState} from 'react'
 
const AddTask = ({className, onAdd}) => {

  //Component local States -----------------------
  const [title, SetTitle] = useState('')
  const [day, SetDay] = useState(() => {
    let today = new Date();
    return today.toDateString()
  })
  const [reminder, SetReminder] = useState(false)

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
        <Button title='add' />
    </form>
  )
}

export default AddTask