const Email = (props) => {
    return (
        <div class="linkCont">
        <a href={props.email}>{props.email}</a>
        </div>
    )
}

export default Email;