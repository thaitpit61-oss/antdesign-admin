import React from 'react';
import { PageContainer } from '@ant-design/pro-components';
import { Form, Input, Button, message } from 'antd';
import { history } from '@umijs/max';

const ProjectCreate: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    // Đây chỉ là mock — bạn có thể gọi API ở đây
    console.log('Create project', values);
    message.success('Tạo dự án thành công');
    history.push('/project/list');
  };

  return (
    <PageContainer title="Tạo dự án">
      <Form form={form} layout="vertical" onFinish={onFinish} style={{ maxWidth: 600 }}>
        <Form.Item name="name" label="Tên dự án" rules={[{ required: true }]}>
          <Input placeholder="Nhập tên dự án" />
        </Form.Item>
        <Form.Item name="owner" label="Người phụ trách">
          <Input placeholder="Người phụ trách" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Tạo
          </Button>
          <Button style={{ marginLeft: 8 }} onClick={() => history.push('/project/list')}>
            Huỷ
          </Button>
        </Form.Item>
      </Form>
    </PageContainer>
  );
};

export default ProjectCreate;
