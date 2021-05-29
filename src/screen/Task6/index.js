import React, { useState, useEffect } from 'react';
import './style.css';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import { Input, Button } from 'antd';
import { PAY_BUTTON, LIFF_APP_ID } from '../../utils/const';
import liff from '@line/liff';

const Task6 = () => {
  const [liffReady, setLiffReady] = useState(false);
  const onSubmit = () => {
    console.log('Pay');
  };

  const sendMessage = async () => {
    liff
      .sendMessages([
        {
          type: 'text',
          text: `[${MESSAGE_FORMAT_TITLE}]\n${MESSAGE_FORMAT_VISIT_CODE}: ${
            data.qrcode
          }\n${MESSAGE_FORMAT_PAYMENT_METHOD}: ${data.payment.toUpperCase()}`
        }
      ])
      .then(function() {
        liff.closeWindow();
      });
  };

  useEffect(() => {
    const initLiff = () => {
      liff
        .init({
          liffId: LIFF_APP_ID
        })
        .then(function() {
          console.log('Liff is ready');
          setLiffReady(true);
        })
        .catch(error => {
          console.log('Liff error: ', error);
          setLiffReady(false);
        });
    };

    initLiff();
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
