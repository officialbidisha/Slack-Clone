import React from 'react'
import classes from './SideBarOption.module.css';
function SideBarOption({Icon , title}) {
    return (
        <div className={classes['sidebar-option-container']}>
            {Icon && <Icon fontSize="small" style={{padding: 10}}/>}
            {Icon ? (
                <h3>{title}</h3>
            ): (
                <h3 className={classes['sidebar-option-channel']}>
                    <span>#</span> {title}
                </h3>
            )}
        </div>
    )
}

export default SideBarOption
