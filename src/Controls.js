export default function Controls(props) {
    return (
        <div className="buttons">
            <div className="button start" onClick={props.start}>Start</div>
            <div className="button wait" onDoubleClick={props.wait}>Wait</div>
            <div className="button reset" onClick={props.reset}>Reset</div>
        </div>
    );
}