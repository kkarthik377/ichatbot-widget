
import './Compose.css';


function Compose(props) {
    let element;
    function sendMessage() {
        if(element.value !== "")
        {
            props.send(element.value, element);
            element.value = "";
        }
    }
    const _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    }
	return (
        <div className="compose">
            <div className="container">
                <input type="text" placeholder={props.chatbotDetails.text.placeHolder} className="" disabled={props.isLoading} ref={(elem) => element= elem} onKeyPress={_handleKeyPress} />
                <button type="button" onClick={sendMessage}>
                    <svg width="46px" height="34px" viewBox="0 0 46 34" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linejoin="round">
                            <g id="Group-209" transform="translate(23.000000, 17.000000) scale(-1, 1) translate(-23.000000, -17.000000) translate(2.000000, 2.000000)" stroke={props.chatbotDetails.appearance.primaryColor} stroke-width="4">
                                <path d="M17,8 C17,8 42,5 42,30 C34,15 17,20 17,20 L17,28 L0,14 L17,0 L17,8 L17,8 Z" id="Stroke-637"></path>
                            </g>
                        </g>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Compose;
