import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Input, Select, Button, Alert, Row, Col } from 'antd';
import Field from '../../components/Field';
import { TASK4_FIELDS, CONFIRM_BUTTON } from '../../utils/const';
import liff from '@line/liff';

const { TextArea } = Input;
const { Option } = Select;

const Task4 = () => {
  const [errMess, setErrMess] = useState('');
  const [allowActions, setAllowActions] = useState(false);
  const [dataField, setDataField] = useState(TASK4_FIELDS);

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

  const contentField = (item, index) => {
    if (item.contentType === 'selection')
      return (
        <Select
          defaultValue={item.value}
          style={{ width: 120 }}
          onChange={value => onChangeFieldHandler(value, index)}
        >
          {item.options.map((time, index) => (
            <Option key={index} value={time}>
              {time}
            </Option>
          ))}
        </Select>
      );

    return (
      <TextArea
        rows={4}
        placeholder={item.name}
        onChange={event => onChangeFieldHandler(event.target.value, index)}
      />
    );
  };

  const onSubmit = () => {
    let message = '';

    dataField.map(a => {
      message = message.concat(`${a.name}: ${a.value}\n`);
      // localStorage.setItem(a.name, a.value);
    });

    if (!dataField[0].value) return;

    sendMessage(message);
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
        setErrMess('sendMessages: success');
        liff.closeWindow();
      })
      .catch(error => {
        setErrMess('sendMessages: ', error);
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
      {errMess.length > 0 && <Alert message={errMess} type="error" />}
      <Row>
        <Col span={18} offset={3}>
          <div>
            <Row style={{ width: '100%' }}>
              {dataField.map((data, index) => (
                <Field
                  key={index}
                  title={data.name}
                  content={contentField(data, index)}
                />
              ))}
            </Row>
          </div>
          <div className="btn-content">
            <Row style={{ width: '100%' }}>
              <Button
                disabled={!allowActions}
                block
                type="primary"
                onClick={() => onSubmit()}
              >
                {CONFIRM_BUTTON}
              </Button>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Task4;
