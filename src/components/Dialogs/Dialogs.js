import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import React from 'react';


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => (<DialogItem name={d.name} id={d.id}/>));

    let messagesElements = props.state.messages.map(msg => (<MessageItem message={msg.message} id={msg.id} />));

    let newMsgEl = React.createRef();

    let addMsg = () => {
        alert(newMsgEl.current.value)
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea ref={newMsgEl}></textarea>
                <button onClick={addMsg}>Send Message</button>
            </div> 
        </div>
    )
}

export default Dialogs;