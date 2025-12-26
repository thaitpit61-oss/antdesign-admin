import React from 'react';
import { PageContainer } from '@ant-design/pro-components';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { history } from '@umijs/max';

const ProjectFormCreate: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    // TODO: call API to save
    console.log('Create form', values);
    message.success('Tạo biểu mẫu thành công (mock)');
    history.push('/project/forms');
  };

  return (
    <PageContainer title="Tạo biểu mẫu">
      <Form form={form} layout="vertical" onFinish={onFinish} style={{ maxWidth: 800 }}>
        <Form.Item name="tenBieuMau" label="Tên biểu mẫu" rules={[{ required: true, message: 'Vui lòng nhập tên biểu mẫu' }]}>
          <Input />
        </Form.Item>

        <Form.Item name="loaiBieuMau" label="Loại biểu mẫu">
          <Input />
        </Form.Item>

        <Form.Item name="duAn" label="Dự án">
          <Input />
        </Form.Item>

        <Form.Item name="dienGiai" label="Diễn giải">
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item name="khoa" valuePropName="checked">
          <Checkbox>Khóa</Checkbox>
        </Form.Item>

        <Form.Item name="nvTao" label="Nhân viên tạo">
          <Input />
        </Form.Item>

        <Form.Item name="ngayTao" label="Ngày tạo">
          <Input placeholder="YYYY-MM-DD" />
        </Form.Item>

        <Form.Item name="nvCapNhat" label="Nhân viên cập nhật">
          <Input />
        </Form.Item>

        <Form.Item name="ngayCapNhat" label="Ngày cập nhật">
          <Input placeholder="YYYY-MM-DD" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Tạo
          </Button>
          <Button style={{ marginLeft: 8 }} onClick={() => history.push('/project/forms')}>
            Huỷ
          </Button>
        </Form.Item>
      </Form>
    </PageContainer>
  );
};

export default ProjectFormCreate;
