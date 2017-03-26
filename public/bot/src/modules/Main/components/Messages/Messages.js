
import Message from '../Message/Message';

import './Messages.css';

function Messages(props) {
	return (
        <div className="messages">
            <div className="powered-by lite">
                Powered by <a href="http://www.calibraint.com" target="_blank">Calibraint</a>
            </div>
            <hr />
            <ul>
            {
                props.messages.map((message, index) => <Message key={index} message={message} />)
            }
            </ul>
        </div>
    );
}

export default Messages;