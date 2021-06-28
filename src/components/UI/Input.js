import React from 'react'
import classes from './Input.module.css'
const Input = React.forwardRef((props, ref) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            {/* {...props.input} means that suppose if we have any props 
            with the object like {type: 'text', id: 'id1'} it means -> type: "text" id: 'id1'
            on destructuring */}
            <input ref={ref} {...props.input}/>
        </div>
    )
})

export default Input
