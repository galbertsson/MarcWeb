const TitleInput = (props) => (
    <input type="text" onChange={e => props.titleCallback(e.target.value)}></input>
)

export default TitleInput