import React, { useMemo, useState } from 'react';
import { PageContainer } from '@ant-design/pro-components';
import { Table, Button, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { history } from '@umijs/max';

type Project = {
  id: number;
  name: string;
  status: 'active' | 'archived';
  owner: string;
};

const ProjectList: React.FC = () => {
  const [data] = useState<Project[]>([
    { id: 1, name: 'Dự án A', status: 'active', owner: 'Nguyễn A' },
    { id: 2, name: 'Dự án B', status: 'archived', owner: 'Trần B' },
  ]);

  const columns: ColumnsType<Project> = useMemo(
    () => [
      { title: 'ID', dataIndex: 'id', key: 'id' },
      { title: 'Tên dự án', dataIndex: 'name', key: 'name' },
      { title: 'Người phụ trách', dataIndex: 'owner', key: 'owner' },
      {
        title: 'Trạng thái',
        dataIndex: 'status',
        key: 'status',
        render: (val: Project['status']) => (
          <Tag color={val === 'active' ? 'green' : 'default'}>{val}</Tag>
        ),
      },
      {
        title: 'Hành động',
        key: 'action',
        render: (_: any, record: Project) => (
          <>
            <Button
              type="link"
              onClick={() => history.push(`/project/${record.id}`)}
            >
              Xem
            </Button>
          </>
        ),
      },
    ],
    [],
  );

  return (
    <PageContainer title="Quản lý dự án">
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={() => history.push('/project/create')}>
          Tạo dự án mới
        </Button>
      </div>
      <Table<Project> rowKey="id" columns={columns} dataSource={data} />
    </PageContainer>
  );
};

export default ProjectList;
