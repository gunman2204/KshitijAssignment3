import React from 'react'
import PropTypes from 'prop-types'

export default function Alert(props) {
    const capitalise=(word)=>{
         let newword=word.toLowerCase();
         return newword.charAt(0).toUpperCase() + newword.slice(1)
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalise(props.alert.type)}</strong>: {props.alert.msg}
        </div>
    )
}
