import React from 'react';
import { PageContainer } from '@ant-design/pro-components';
import { Form, Input, Button, message, InputNumber, Checkbox } from 'antd';
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
      <Form form={form} layout="vertical" onFinish={onFinish} style={{ maxWidth: 800 }}>
        <Form.Item name="ngay" label="Ngày">
          <Input placeholder="YYYY-MM-DD" />
        </Form.Item>
        <Form.Item name="code" label="Mã">
          <Input />
        </Form.Item>
        <Form.Item name="maFast" label="Mã Fast">
          <Input />
        </Form.Item>
        <Form.Item name="tenDuAn" label="Tên dự án" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="loaiDuAn" label="Loại dự án">
          <Input />
        </Form.Item>
        <Form.Item name="nhanVien" label="Nhân viên">
          <Input />
        </Form.Item>
        <Form.Item name="dienTich" label="Diện tích">
          <Input />
        </Form.Item>
        <Form.Item name="soGiayPhep" label="Số giấy phép">
          <Input />
        </Form.Item>
        <Form.Item name="ngayCap" label="Ngày cấp">
          <Input placeholder="YYYY-MM-DD" />
        </Form.Item>
        <Form.Item name="donGia" label="Đơn giá">
          <Input />
        </Form.Item>
        <Form.Item name="soLuong" label="Số lượng">
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item name="diaChi" label="Địa chỉ">
          <Input />
        </Form.Item>
        <Form.Item name="ngayDuyet" label="Ngày duyệt">
          <Input placeholder="YYYY-MM-DD" />
        </Form.Item>
        <Form.Item name="nguoiDuyet" label="Người duyệt">
          <Input />
        </Form.Item>
        <Form.Item name="daDuyet" valuePropName="checked">
          <Checkbox>Đã duyệt</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">Tạo</Button>
          <Button style={{ marginLeft: 8 }} onClick={() => history.push('/project/list')}>Huỷ</Button>
        </Form.Item>
      </Form>
    </PageContainer>
  );
};

export default ProjectCreate;
