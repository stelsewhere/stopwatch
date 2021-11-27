export default function Timer(props) {
    return (
        <div className="timer">
            <div className="timer__block">
                <div className="time hour">{(props.time.hour >= 9) ?
                    props.time.hour :
                    "0" + props.time.hour}</div>
                <div className="title">Hour</div>
            </div>
            <div className="timer__block">
                <div className="time minute">{(props.time.minute >= 9) ?
                    props.time.minute :
                    "0" + props.time.minute}</div>
                <div className="title">Minute</div>
            </div>
            <div className="timer__block">
                <div className="time second">{(props.time.second >= 9) ?
                    props.time.second :
                    "0" + props.time.second}</div>
                <div className="title">Second</div>
            </div>
        </div>
    );
}