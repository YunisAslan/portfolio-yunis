import React from 'react'

const Button = ({ btnText, type, className }) => {
    return (
        <>
            <button
                className={className}
                type={type && 'submit'}>
                {btnText}
            </button>
        </>
    )
}

export default Button