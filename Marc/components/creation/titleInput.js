const TitleInput = (props) => (
    <input type="text" value={props.title} onChange={e => props.titleCallback(e.target.value)}></input>
)

export default TitleInput