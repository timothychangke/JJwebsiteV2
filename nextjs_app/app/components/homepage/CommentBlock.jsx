import React from 'react';

export const CommentBlock = (props) => {
    return (
        <div className='bg-gray-400 flex items-left justify-center flex-col text-left p-6'>
            <div className='flex items-center mb-4'>
                <div className='rounded-full h-16 w-16 bg-gray-700'></div>
                <div className='text-left ml-2'>
                    <p className='text-sm'>{props.name}</p>
                    <p className='text-sm'>{props.position}</p>
                </div>
            </div>
            <p className='text-md'>{props.comment}</p>
        </div>
    )
}