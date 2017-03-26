
import './Message.css';

function Message(props) {
    const icon = (props.message.icon) ? (<img className="icon" src={ props.message.icon } /> ): (<span />);
    let message;
    switch(props.message.type) {
    case 'image':
        message = <div className="image_container bubble"><img className="image" src={ props.message.text } /></div>
        break;
    case 'message':
        message = <div className="text bubble markdown" style="theme">
            <p>{props.message.text}</p>
        </div>
        break;
    case 'pending':
        message = <div className="text bubble markdown pending" style="theme">{ props.message.text }</div>
        break;
    }
	return (
        <li className={props.message.user + " animated fadeInUp"}>
            <div className="timestamp lite">{ props.message.timestamp }</div>
            <div className="main">
            {icon}
            {message}
            </div>
        </li>
    );
}

export default Message;
