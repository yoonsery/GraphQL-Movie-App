import { HashRouter as Router, Route } from 'react-router-dom';
import detail from '../routes/detail';
import home from '../routes/home';

function App() {
  return (
    <Router className="App">
      <Route exact path="/" component={home} />
      <Route path="/:id" component={detail} />
    </Router>
  );
}

export default App;
