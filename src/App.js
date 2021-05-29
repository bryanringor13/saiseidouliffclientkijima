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
import { TASKS4, TASKS5, TASKS6 } from './utils/const';

const { Option } = Select;
const App = () => {
  const [currentPage, setCurrentPage] = useState('task4');
  const MainContent = () => {
    const onChangeContent = value => {
      setCurrentPage(value);
    };

    return (
      <Radio.Group
        value={currentPage}
        onChange={event => onChangeContent(event.target.value)}
      >
        <Radio.Button value={TASKS4}>Task 4</Radio.Button>
        <Radio.Button value={TASKS5}>Task 5</Radio.Button>
        <Radio.Button value={TASKS6}>Task 6</Radio.Button>
      </Radio.Group>
    );
  };

  return (
    <div className="main-content">
      <MainContent />
      {currentPage === TASKS4 && <Task4 />}
      {currentPage === TASKS5 && <Task5 />}
      {currentPage === TASKS6 && <Task6 />}
    </div>
  );
};

export default App;
