import { Button } from '@material-ui/core';
import React from 'react'

interface TextInputProps {
    textCallBack: (value: string) => void;
    buttonCallBack: () => void;
}

const textInput = (props: TextInputProps) => {
    return <>
        <textarea onChange={(e) => props.textCallBack(e.target.value)}></textarea>
        <Button onClick={() => props.buttonCallBack()}>Import</Button>
    </>
}

export default textInput;