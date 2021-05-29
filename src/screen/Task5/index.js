import React, { useState, useEffect } from 'react';
import './style.css';
import 'antd/dist/antd.css';
import { Row, Col, Alert } from 'antd';
import Field from '../../components/Field';
import { Input } from 'antd';
import { FIELDS, CONFIRM_BUTTON, LIFF_APP_ID } from '../../utils/const';
import { DatePicker, Space } from 'antd';
import { Form, Select, Button } from 'antd';
import liff from '@line/liff';

const { Option } = Select;

const Task5 = () => {
  const [liffReady, setLiffReady] = useState(false);
  const [dataField, setDataField] = useState(FIELDS);

  const onChangeDateFieldHandler = (date, dateString, index) => {
    currentStateUpdate(date, index);
  };

  const onChangeFieldHandler = (value, index) => {
    currentStateUpdate(value, index);
  };

  const currentStateUpdate = (value, index) => {
    setDataField(state => {
      let currentState = state;
      currentState[index].value = value;
      return currentState;
    });
  };

  const ContentField = ({ item, index }) => {
    if (item.contentType === 'selection')
      return (
        <Form.Item
          label={item.name}
          name={item.identifier}
          rules={[
            {
              required: true,
              message: `Please input your ${item.name}!`
            }
          ]}
          className="padding-content left-content"
          span={6}
          pull={18}
        >
          <Select
            style={{ width: 120 }}
            onChange={value => onChangeFieldHandler(value, index)}
            placeholder={item.name}
          >
            {item.options.map((time, index) => (
              <Option key={index} value={time}>
                {time}
              </Option>
            ))}
          </Select>
        </Form.Item>
      );
    if (item.contentType === 'date-picker')
      return (
        <Form.Item
          label={item.name}
          name={item.identifier}
          rules={[
            {
              required: true,
              message: `Please input your ${item.name}!`
            }
          ]}
          className="padding-content left-content"
          span={6}
          pull={18}
        >
          <DatePicker
            onChange={(date, dateString) =>
              onChangeDateFieldHandler(date, dateString, index)
            }
          />
        </Form.Item>
      );
    return (
      <Form.Item
        label={item.name}
        name={item.identifier}
        rules={[
          {
            required: true,
            message: `Please input your ${item.name}!`
          }
        ]}
        className="padding-content left-content"
        span={6}
        pull={18}
      >
        <Input
          placeholder={item.name}
          onChange={event => onChangeFieldHandler(event.target.value, index)}
        />
      </Form.Item>
    );
  };

  const onSubmit = () => {
    sendMessage();
  };

  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
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
        <Alert message="Success" type="success" />;
        liff.closeWindow();
      })
      .catch(error => {
        <Alert message="Error" type="error" />;
        console.log('ERROR: ', error);
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
          <div>
            <Row style={{ width: '100%' }}>
              <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                requiredMark={'optional'}
              >
                {dataField.map((data, index) => (
                  <ContentField key={index} item={data} index={index} />
                ))}
                <Form.Item>
                  <Button
                    block
                    type="primary"
                    htmlType="submit"
                    onClick={() => onSubmit()}
                    disabled={!liffReady}
                  >
                    {CONFIRM_BUTTON}
                  </Button>
                </Form.Item>
              </Form>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Task5;
