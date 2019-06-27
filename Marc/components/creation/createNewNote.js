const CreateNewNote = (props) => (
    <>
        <button onClick={() => props.newNoteCallback("basic")}>Basic</button>
        <button onClick={() => props.newNoteCallback("cloze")}>Cloze</button>
    </>
)

export default CreateNewNote