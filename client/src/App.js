import { Router } from '@reach/router';

import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

import Login from './views/Login';
import Main from './views/Main';

function App() {
    return (
        <div className="App">
            <Router>
                <Login path="/" />
                <Main path="/profile" />
            </Router>
        </div>
    );
}

export default App;
