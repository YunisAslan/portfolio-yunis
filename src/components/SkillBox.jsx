import React from 'react'

const SkillBox = ({ icon }) => {

    return (
        <>
            <div
                className='skill-container border border-lightBorder flex justify-center rounded-md p-5 dark:border-darkBorder'>
                <div className='skill-logo flex justify-center w-20 h-24'>
                   {icon}
                </div>
            </div>
        </>
    )
}

export default SkillBox