import Component from 'inferno-component';
import { Provider } from 'inferno-redux';
import Main from './modules/Main/Main';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Provider store={this.props.store}>
                <div className="App">
                    <Main />
                </div>
            </Provider>
        );
    }
}

export default App;
