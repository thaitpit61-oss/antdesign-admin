import React, { useMemo, useState } from 'react';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Button, Tag } from 'antd';
import type { ProColumns } from '@ant-design/pro-components';
import { history } from '@umijs/max';

type Project = {
  id: number;
  ngay: string;
  code: string;
  maFast: string;
  tenDuAn: string;
  loaiDuAn: string;
  nhanVien: string;
  dienTich: string;
  soGiayPhep: string;
  ngayCap: string;
  donGia: string;
  soLuong: number;
  diaChi: string;
  ngayDuyet: string;
  nguoiDuyet: string;
  daDuyet: boolean;
};

const ProjectList: React.FC = () => {
  const [data] = useState<Project[]>([
    {
      id: 1,
      ngay: '2025-01-01',
      code: 'DA-001',
      maFast: 'MF001',
      tenDuAn: 'Dự án A',
      loaiDuAn: 'Loại 1',
      nhanVien: 'Nguyễn A',
      dienTich: '120 m2',
      soGiayPhep: 'GP-123',
      ngayCap: '2024-12-01',
      donGia: '1,000,000',
      soLuong: 10,
      diaChi: 'Hà Nội',
      ngayDuyet: '2024-12-15',
      nguoiDuyet: 'Ban QL',
      daDuyet: true,
    },
    {
      id: 2,
      ngay: '2025-02-02',
      code: 'DA-002',
      maFast: 'MF002',
      tenDuAn: 'Dự án B',
      loaiDuAn: 'Loại 2',
      nhanVien: 'Trần B',
      dienTich: '80 m2',
      soGiayPhep: 'GP-456',
      ngayCap: '2024-11-20',
      donGia: '800,000',
      soLuong: 5,
      diaChi: 'Hồ Chí Minh',
      ngayDuyet: '2024-11-30',
      nguoiDuyet: 'BGĐ',
      daDuyet: false,
    },
  ]);

  const columns: ProColumns<Project>[] = useMemo(
    () => [
      { title: 'ID', dataIndex: 'id', search: false, width: 70 },
      { title: 'Mã', dataIndex: 'code' },
      { title: 'Mã Fast', dataIndex: 'maFast' },
      { title: 'Tên dự án', dataIndex: 'tenDuAn', ellipsis: true },
      {
        title: 'Loại dự án',
        dataIndex: 'loaiDuAn',
        valueType: 'select',
        valueEnum: {
          'Loại 1': { text: 'Loại 1' },
          'Loại 2': { text: 'Loại 2' },
        },
      },
      { title: 'Nhân viên', dataIndex: 'nhanVien' },
      { title: 'Địa chỉ', dataIndex: 'diaChi', ellipsis: true },
      { title: 'Diện tích', dataIndex: 'dienTich', search: false },
      { title: 'Đơn giá', dataIndex: 'donGia', search: false },
      { title: 'Số lượng', dataIndex: 'soLuong', search: false },
      {
        title: 'Đã duyệt',
        dataIndex: 'daDuyet',
        valueType: 'select',
        valueEnum: {
          true: { text: 'Đã duyệt' },
          false: { text: 'Chưa duyệt' },
        },
        render: (_, record) => (
          <Tag color={record.daDuyet ? 'green' : 'default'}>
            {record.daDuyet ? 'Yes' : 'No'}
          </Tag>
        ),
      },
      { title: 'Ngày', dataIndex: 'ngay', valueType: 'date', search: false },
      { title: 'Ngày duyệt', dataIndex: 'ngayDuyet', valueType: 'date', search: false },
      {
        title: 'Hành động',
        valueType: 'option',
        width: 100,
        render: (_, record) => [
          <a key="view" onClick={() => history.push(`/project/${record.id}`)}>
            Xem
          </a>,
        ],
      },
    ],
    [],
  );

  return (
    <PageContainer title="Quản lý dự án">
      <ProTable<Project>
        rowKey="id"
        columns={columns}
        dataSource={data}
        search={{ labelWidth: 'auto' }}
        pagination={{ pageSize: 10 }}
        scroll={{ x: 'max-content' }}
        toolbar={{
          actions: [
            <Button key="create" type="primary" onClick={() => history.push('/project/create')}>
              Tạo dự án mới
            </Button>,
          ],
        }}
      />
    </PageContainer>
  );
};

export default ProjectList;
