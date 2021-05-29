import React from 'react';
import '../style.css';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';

const Field = ({ title, content }) => {
  return (
    <>
      <Col className="padding-content right-content" span={18} push={6}>
        {content}
      </Col>
      <Col className="padding-content left-content" span={6} pull={18}>
        {title}
      </Col>
    </>
  );
};

export default Field;
