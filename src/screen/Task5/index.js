import React, { useState, useEffect } from 'react';
import './style.css';
import 'antd/dist/antd.css';
import { Row, Col, Alert } from 'antd';
import Field from '../../components/Field';
import { Input } from 'antd';
import { FIELDS, CONFIRM_BUTTON } from '../../utils/const';
import { DatePicker, Space } from 'antd';
import { Form, Select, Button } from 'antd';
import liff from '@line/liff';

const { Option } = Select;

const Task5 = () => {
  const [dataField, setDataField] = useState(FIELDS);
  const [allowActions, setAllowActions] = useState(false);
  const [errorMess, setErrorMess] = useState('');

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
    console.log('onSubmit');
  };

  const onFinish = values => {
    let message = '';

    dataField.map((item, index) => {
      message = message.concat(`${item.name}: ${item.value}\n`);
    });

    sendMessage(message);

    // setErrorMess(message);
  };

  const onFinishFailed = errorInfo => {
    setErrorMess('onFinishFailed: ');
  };

  const sendMessage = async message => {
    liff
      .sendMessages([
        {
          type: 'text',
          text: message
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
                    disabled={!allowActions}
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
