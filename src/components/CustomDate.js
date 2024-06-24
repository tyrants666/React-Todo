import React from 'react'
import { MdDateRange } from 'react-icons/md'

const CustomDate = ({setDay}) => {
  return (
    <div className='custom-date out'>
        <input type='date' onChange={(e) => setDay(new Date(e.target.value).toDateString())} />
        <MdDateRange/>
    </div>
  )
}

export default CustomDate