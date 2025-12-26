import React from 'react';
import { PageContainer } from '@ant-design/pro-components';
import { Form, Input, Button, message } from 'antd';
import { history } from '@umijs/max';

const ProductCreate = () => {
  const onFinish = (values) => {
    console.log('Create product', values);
    message.success('Tạo sản phẩm thành công (mock)');
    history.push('/product/list');
  };

  return (
    <PageContainer title="Thêm sản phẩm">
      <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 600 }}>
        <Form.Item label="Tên sản phẩm" name="name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Mô tả" name="desc">
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Tạo</Button>
        </Form.Item>
      </Form>
    </PageContainer>
  );
};

export default ProductCreate;
