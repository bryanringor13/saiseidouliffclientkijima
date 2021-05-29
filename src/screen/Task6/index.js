import React, { useState, useEffect } from 'react';
import './style.css';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import { Input, Button } from 'antd';
import { PAY_BUTTON } from '../../utils/const';
import liff from '@line/liff';

const Task6 = () => {
  const [allowActions, setAllowActions] = useState(false);
  const [amountInput, setTextInput] = useState(0);

  const onSubmit = () => {
    if (amountInput > 0) sendMessage(amountInput);
  };

  const sendMessage = async amountInput => {
    liff
      .sendMessages([
        {
          type: 'text',
          text: `https://liff.line.me/1656043326-pMq6BjwJ/payment=${amountInput}`
        }
      ])
      .then(function() {
        liff.closeWindow();
      })
      .catch(error => {
        setErrorMess('sendMessages: ', error);
      });
  };

  useEffect(() => {
    liff.ready
      .then(() => {
        setAllowActions(true);
      })
      .catch(error => {
        setAllowActions(false);
      });
  }, []);

  const handleChange = event => {
    setTextInput(event.target.value);
  };

  return (
    <div className="content">
      <Row>
        <Col>
          <div className="content">
            <Row style={{ width: '100%' }}>
              <Input
                type="number"
                onChange={event => handleChange(event)}
                placeholder="Amount"
                size="large"
              />
            </Row>
          </div>
          <div className="btn-content">
            <Row style={{ width: '100%' }}>
              <Button
                block
                disabled={!allowActions}
                type="primary"
                onClick={() => onSubmit()}
              >
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
