import React from 'react'

const SkillBox = ({ mySkill }) => {
    return (
        <>
            <div className='skill-container border border-lightBorder flex justify-center bg-white rounded-md p-5 dark:border-darkBorder'>
                <div className='skill-logo w-20 h-24 flex justify-center'>
                    <img src={mySkill} alt=""/>
                </div>
            </div>
        </>
    )
}

export default SkillBox