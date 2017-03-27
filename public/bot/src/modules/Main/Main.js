import Component from 'inferno-component';

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
            showWidget: false
        };
        this.conversations = this.conversations.bind(this);
        this.toggle = this.toggle.bind(this);
    }
    componentWillMount() {
        this.conversations("");
    }
    conversations(msg='') {
        if (msg && msg !== '') {
            const userMsg = {
                user: 'user',
                type: 'message',
                text: msg
            };
            this.setState({
                messages:[...this.state.messages, userMsg],
                showWidget: this.state.showWidget
            });
        }
        postConversation(msg)
        .then(data => {
            const botMsg = {
                user: 'bot',
                type: 'message',
                text: (data.output && data.output.text) ? data.output.text : ''
            };
            this.setState({
                messages:[...this.state.messages, botMsg],
                showWidget: this.state.showWidget
            });
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
                       <Compose send={this.conversations} />
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
