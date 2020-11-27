import { TextField } from '@material-ui/core'
import React from 'react'

interface TitleInputProps {
    title: string,
    titleCallback: (value: string) => void
}

const TitleInput = (props: TitleInputProps) => (
    <TextField value={props.title} onChange={e => props.titleCallback(e.target.value)}></TextField>
)

export default TitleInput