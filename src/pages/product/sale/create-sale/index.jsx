import React from 'react';
import { PageContainer } from '@ant-design/pro-components';
import { Form, Input, Button, message } from 'antd';
import { history } from '@umijs/max';

const CreateSale = () => {
  const onFinish = (values) => {
    console.log('Create sale', values);
    message.success('Tạo đợt mở bán thành công (mock)');
    history.push('/product/sale');
  };

  return (
    <PageContainer title="Thêm đợt mở bán">
      <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 600 }}>
        <Form.Item label="Tên đợt" name="title" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Ghi chú" name="note">
          <Input.TextArea rows={3} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Tạo</Button>
        </Form.Item>
      </Form>
    </PageContainer>
  );
};

export default CreateSale;
