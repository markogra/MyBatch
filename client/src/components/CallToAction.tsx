import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
interface CallToActionType {
  route: string,
  text: string
}

const CallToAction: FC<CallToActionType> = ({route, text}) => {
  return <div className='call_to_action'>
    <NavLink className='call_to_action_text' to={route}>{text}</NavLink>
  </div> 
}

export default CallToAction;