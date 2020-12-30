import { Button } from '@material-ui/core'

interface CreateNewNoteProps {
    newNoteCallback: (value: string) => void;
}

const CreateNewNote = (props: CreateNewNoteProps) => (
    <>
        <Button onClick={() => props.newNoteCallback("basic")}>Basic</Button>
        <Button onClick={() => props.newNoteCallback("cloze")}>Cloze</Button>
    </>
)

export default CreateNewNote