


import React from 'react'

interface TextInputProps {
    textCallBack: (value: string) => void;
    buttonCallBack: () => void;
}

const textInput = (props: TextInputProps) => {
    return <>
    <textarea onChange={(e) => props.textCallBack(e.target.value)}></textarea>
    <button onClick={() => props.buttonCallBack()}>Import</button>
    </>
}

export default textInput;