import callApi from '../utils/CallApi';

let CCHAT_CONFIG = {
    CONVERSATION_DATA: {
        "input": {},
        "context": {},
        "chatbot": {
            "name": "",
            "email": "",
            "pageUrl": ""
        },
        "browserDetails": {}
    }
};
window.intentArr = [];

export function postConversation(msg="") {
    if (!navigator.onLine) {
        console.log("Please check your internet connection");
        return;
    }
    let jsonData = CCHAT_CONFIG.CONVERSATION_DATA;
    jsonData.browserDetails = CCHAT_CONFIG.BROWSER_DETAILS;
    // jsonData.browserDetails.pageURL = parent.window.location.href;
    if (msg) {
        jsonData.input.text = msg;
        jsonData.input.date = new Date();
    }
    return callApi('conversation/f0a3dc1f865a4b349a11b78282c2ab0f', 'post', jsonData)
        .then((data) =>{
            if (data.status === "success") {
                var value = data.data;
                CCHAT_CONFIG.CONVERSATION_DATA.context = value.context;
                window.LastMsgDetails = value;
                if (value.intentId) {
                    var temp = window.intentArr;
                    temp.push(value.intentId);
                    window.intentArr = temp;
                }
                return (value);
            } else {
                var errMsg = "Something went wrong please try again";
                return (errMsg);
            }
        }, (err) => {
            console.log(err);
            return ("Something went wrong please try again");
        });
}
