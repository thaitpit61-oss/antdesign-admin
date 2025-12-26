import React, { useMemo, useState } from 'react';
import { PageContainer } from '@ant-design/pro-components';
import { Table, Button, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { history } from '@umijs/max';

type ProjectForm = {
  id: number;
  tenBieuMau: string;
  loaiBieuMau: string;
  duAn: string;
  dienGiai: string;
  khoa: boolean;
  nvTao: string;
  ngayTao: string;
  nvCapNhat: string;
  ngayCapNhat: string;
};

const ProjectForms: React.FC = () => {
  const [data] = useState<ProjectForm[]>([
    {
      id: 1,
      tenBieuMau: 'Phiếu khảo sát',
      loaiBieuMau: 'Khảo sát khách hàng',
      duAn: 'Dự án A',
      dienGiai: 'Phiếu khảo sát chất lượng',
      khoa: false,
      nvTao: 'Nguyễn A',
      ngayTao: '2025-05-10',
      nvCapNhat: 'Trần B',
      ngayCapNhat: '2025-06-01',
    },
    {
      id: 2,
      tenBieuMau: 'Phiếu đăng ký',
      loaiBieuMau: 'Đăng ký tham gia',
      duAn: 'Dự án B',
      dienGiai: 'Phiếu đăng ký sự kiện',
      khoa: true,
      nvTao: 'Lê C',
      ngayTao: '2025-06-01',
      nvCapNhat: 'Lê C',
      ngayCapNhat: '2025-06-02',
    },
  ]);

  const columns: ColumnsType<ProjectForm> = useMemo(
    () => [
      { title: 'ID', dataIndex: 'id', key: 'id' },
      { title: 'Tên biểu mẫu', dataIndex: 'tenBieuMau', key: 'tenBieuMau' },
      { title: 'Loại biểu mẫu', dataIndex: 'loaiBieuMau', key: 'loaiBieuMau' },
      { title: 'Dự án', dataIndex: 'duAn', key: 'duAn' },
      { title: 'Diễn giải', dataIndex: 'dienGiai', key: 'dienGiai' },
      {
        title: 'Khóa',
        dataIndex: 'khoa',
        key: 'khoa',
        render: (val: boolean) => <Tag color={val ? 'red' : 'green'}>{val ? 'Khóa' : 'Hoạt động'}</Tag>,
      },
      { title: 'Nhân viên tạo', dataIndex: 'nvTao', key: 'nvTao' },
      { title: 'Ngày tạo', dataIndex: 'ngayTao', key: 'ngayTao' },
      { title: 'Nhân viên cập nhật', dataIndex: 'nvCapNhat', key: 'nvCapNhat' },
      { title: 'Ngày cập nhật', dataIndex: 'ngayCapNhat', key: 'ngayCapNhat' },
      {
        title: 'Hành động',
        key: 'action',
        render: (_: any, record: ProjectForm) => (
          <>
            <Button type="link" onClick={() => history.push(`/project/forms/${record.id}`)}>
              Xem
            </Button>
          </>
        ),
      },
    ],
    [],
  );

  return (
    <PageContainer title="Biểu mẫu">
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={() => history.push('/project/forms/create')}>
          Tạo biểu mẫu
        </Button>
      </div>
      <Table<ProjectForm> rowKey="id" columns={columns} dataSource={data} />
    </PageContainer>
  );
};

export default ProjectForms;
