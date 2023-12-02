import React, { forwardRef } from 'react';
import './style.css';

interface Props {

}

const InputBox = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
    return (
        <div className='inputbox'>
            <div className='inputbox-label'>{'pw'}</div>
            <div className='inputbox-container'>
                <input className='input' />
                <div className='icon-button'>
                    <div className='icon eye-light-off-icon'></div>
                </div>
            </div>
            <div className='inputbox-message'>{'over 8 char'}</div>
        </div>
    )
})

export default InputBox;