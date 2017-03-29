
import Message from '../Message/Message';

import './Messages.css';

function Messages(props) {
	return (
        <div className="messages">
        {
            (props.chatbotDetails.removeChatbotBrand) ?
            <div className="powered-by lite">
                Powered by <a href="http://www.calibraint.com" target="_blank">Calibraint</a>
            </div>:
            null
        }
            <hr />
            <ul>
            {
                props.messages.map((message, index) => <Message key={index} message={message} chatbotDetails={props.chatbotDetails}/>)
            }
            </ul>
        </div>
    );
}

export default Messages;