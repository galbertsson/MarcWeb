interface CreateNewNoteProps {
    newNoteCallback: (value: string) => void;
}

const CreateNewNote = (props: CreateNewNoteProps) => (
    <>
        <button onClick={() => props.newNoteCallback("basic")}>Basic</button>
        <button onClick={() => props.newNoteCallback("cloze")}>Cloze</button>
    </>
)

export default CreateNewNote