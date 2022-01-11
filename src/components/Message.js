import classes from './Message.module.css';

import React from 'react'

function Message({message, timestamp, user, userimage}) {
    return (
        <div className={classes['message-container']}>
            <img src={userimage} alt=""/>
            <div className={classes['message-info']}>
                <h4>{user} {''}
                    <span>
                        {new Date(timestamp?.toDate()).toUTCString()}
                    </span>
                </h4>
                <p>
                    {message}
                </p>
            </div>
        </div>
    )
}

export default Message
