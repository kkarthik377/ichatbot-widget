import { render } from 'inferno';
import App from './App';
import './index.css';
import { configureStore } from './store';

const store = configureStore(window.__INITIAL_STATE__);
render(<App store={store} />, document.getElementById('iChatbot'));
