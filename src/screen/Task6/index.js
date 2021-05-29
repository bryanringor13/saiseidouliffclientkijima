import React, { useState } from 'react';
import './style.css';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import { Input, Button } from 'antd';
import { PAY_BUTTON } from '../../utils/const';

const Task6 = () => {
  const onSubmit = () => {
    console.log('Pay');
  };

  return (
    <div className="content">
      <Row>
        <Col>
          <div className="content">
            <Row style={{ width: '100%' }}>
              <Input placeholder="Amount" size="large" />
            </Row>
          </div>
          <div className="btn-content">
            <Row style={{ width: '100%' }}>
              <Button block type="primary" onClick={() => onSubmit()}>
                {PAY_BUTTON}
              </Button>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Task6;
