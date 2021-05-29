import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from 'react-router-dom';
import { Select, Radio } from 'antd';
import Task4 from './screen/Task4';
import Task5 from './screen/Task5';
import Task6 from './screen/Task6';
import './style.css';

const { Option } = Select;
const App = () => {
  const MainContent = () => {
    let history = useHistory();
    const [currentContent, setCurrentContent] = useState('task4');
    const onChangeContent = value => {
      setCurrentContent(value);
      history.push(value);
    };

    return (
      <Radio.Group
        value={currentContent}
        onChange={event => onChangeContent(event.target.value)}
      >
        <Radio.Button value="/task4">Task 4</Radio.Button>
        <Radio.Button value="/task5">Task 5</Radio.Button>
        <Radio.Button value="/task6">Task 6</Radio.Button>
      </Radio.Group>
    );
  };

  return (
    <Router>
      <div className="main-content">
        <MainContent />
        <Switch>
          <Route exact path="/task4">
            <Task4 />
          </Route>
          <Route path="/task5">
            <Task5 />
          </Route>
          <Route path="/task6">
            <Task6 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
