import React from 'react'
import { MdNotifications, MdNotificationsNone } from 'react-icons/md'

const CustomCheckbox = ({checked, onToggle}) => {
  return (
    <div className={`custom-checkbox ${checked ? 'out' : 'in'}`}>
        <input type='checkbox' checked={checked} onChange={(e) => { onToggle(e.currentTarget.checked) }} />
        {checked ? <MdNotifications className="icon-important" /> : <MdNotificationsNone className="icon-not-important" />}
    </div>
  )
}

export default CustomCheckbox