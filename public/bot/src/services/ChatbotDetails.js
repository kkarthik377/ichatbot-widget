import callApi from '../utils/CallApi';

export function getChatbotDetails() {
    return callApi('chatbot/f0a3dc1f865a4b349a11b78282c2ab0f')
        .then((data) =>{
            if (data.status === "success") {
                return data;
            } else {
                var errMsg = "Something went wrong please try again";
                return (errMsg);
            }
        }, (err) => {
            console.log(err);
            return ("Something went wrong please try again");
        });
}