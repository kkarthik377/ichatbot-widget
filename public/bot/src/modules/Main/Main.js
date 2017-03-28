import Component from 'inferno-component';
// import Promise from 'bluebird';

import Header from './components/Header/Header';
import Messages from './components/Messages/Messages';
import Compose from './components/Compose/Compose';

import { postConversation } from '../../services/Conversation';

import './Main.css';
import '../../../public/css/animate.css';

let messages;
class Main extends Component {
    constructor(props) {
        super(props);
        messages = [];
        this.state = {
            messages:[],
            showWidget: false,
            isLoading: false
        };
        this.conversations = this.conversations.bind(this);
        this.toggle = this.toggle.bind(this);
    }
    scrollTo() {
        let elem = document.getElementsByClassName('messages');
        if(!elem.length) {
            return;
        }
        var element = elem[0]
        var to = elem[0].scrollHeight;
        var duration = 1250;
        var start = element.scrollTop,
            change = to - start,
            currentTime = 0,
            increment = 20;
        var easeInOutQuad = function(t, b, c, d) {
            t /= d/2;
            if (t < 1) return c/2*t*t + b;
            t--;
            return -c/2 * (t*(t-2) - 1) + b;
        }
        var animateScroll = function(){        
            currentTime += increment;
            var val = easeInOutQuad(currentTime, start, change, duration);
            element.scrollTop = val;
            if(currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();
    }
    componentWillMount() {
        this.conversations("");
    }
    componentDidUpdate() {
        setTimeout(() => {
            this.scrollTo();    
        },500);
    }
    conversations(msg='', element=null) {
        if (msg && msg !== '') {
            const userMsg = {
                user: 'user',
                type: 'message',
                text: msg
            };
            const loading = {
                user: 'bot',
                type: 'pending',
            };
            this.setState({
                messages:[...this.state.messages, userMsg, loading],
                showWidget: this.state.showWidget,
                isLoading: true
            });
        }
        postConversation(msg)
        .then(data => {
            data.output.text.forEach((message) => {
                const botMsg = {
                    user: 'bot',
                    type: 'message',
                    text: message
                };
                const newMessagesArray = [...this.state.messages];
                newMessagesArray.pop();
                this.setState({
                    messages:[...newMessagesArray, botMsg],
                    showWidget: this.state.showWidget,
                    isLoading: false
                });
            });
            if(element)
                element.focus();
        });
    }

    toggle() {
        this.setState({
            messages:[...this.state.messages],
            showWidget: !this.state.showWidget
        });
    }

    render() {
        let view = null;
        if(!this.state.showWidget) {
            view = (
                <div id="image" className="" onClick={this.toggle} style="position: fixed; bottom:0; right: 0; cursor: pointer;">
                   <img src="../../../images/bot.png" style="height:80px; width:80px;" />
                   <p className="click-me">Click Me</p>
               </div>
            );
        } else {
            view =(
                <div id="app" className="animated bounceInRight">
                   <div id="messenger" className="fullscreen">
                       <Header close={this.toggle} />
                       <Messages messages={this.state.messages} />
                       <Compose send={this.conversations} isLoading={this.state.isLoading} />
                   </div>
               </div>
            );
        }
        return (
            <div style={{ overflow: 'hidden' }}>
           {view}
           </div>
        );
    }
}

export default Main;
