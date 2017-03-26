import Component from 'inferno-component';
import Main from './modules/Main/Main';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Main />
            </div>
        );
    }
}

export default App;
