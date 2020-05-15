interface TitleInputProps {
    title: string,
    titleCallback: (value: string) => void
}

const TitleInput = (props: TitleInputProps) => (
    <input type="text" value={props.title} onChange={e => props.titleCallback(e.target.value)}></input>
)

export default TitleInput