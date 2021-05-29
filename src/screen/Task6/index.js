import React, { useState, useEffect } from 'react';
import './style.css';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import { Input, Button } from 'antd';
import { PAY_BUTTON } from '../../utils/const';
import liff from '@line/liff';

const Task6 = () => {
  const [allowActions, setAllowActions] = useState(false);

  const onSubmit = () => {
    sendMessage();
  };

  const sendMessage = async message => {
    liff
      .sendMessages([
        {
          type: 'text',
          text: 'asd'
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
