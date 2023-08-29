import Button from './Button'
import {useState} from 'react'
 
const AddTask = ({className}) => {

  const [text, SetText] = useState('')
  const [time, SetTime] = useState(() => {
    var today = new Date();
    return today.toDateString()
  })
  const [reminder, SetReminder] = useState(false)

  return (
    <form className={`addform flex ${className}`}>
        <input  
          type="text" 
          placeholder="Enter your mission" 
          value={text}
          onChange={(e) => SetText(e.target.value)} />
        <Button title='add' />
    </form>
  )
}

export default AddTask