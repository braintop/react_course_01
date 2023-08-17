export default function Nav(props) {
    return (
        <div>
            <h1>{props.text} </h1>
            <p>height is {props.x}</p>
            <p>width is {props.width}</p>
        </div>
    );
}
