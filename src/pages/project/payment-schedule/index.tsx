import React, { useMemo, useState } from 'react';
import { PageContainer } from '@ant-design/pro-components';
import { Table, Button, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { history } from '@umijs/max';

type PaymentScheduleItem = {
  id: number;
  dot: string;
  truongHop: string;
  khoangCach: string;
  macDinh: boolean;
  nvTao: string;
  ngayTao: string;
  nvCapNhat: string;
  ngayCapNhat: string;
};

const PaymentSchedule: React.FC = () => {
  const [data] = useState<PaymentScheduleItem[]>([
    {
      id: 1,
      dot: 'Đợt 1',
      truongHop: 'Thanh toán theo tiến độ',
      khoangCach: '30 ngày',
      macDinh: true,
      nvTao: 'Nguyễn A',
      ngayTao: '2025-05-01',
      nvCapNhat: 'Trần B',
      ngayCapNhat: '2025-05-10',
    },
    {
      id: 2,
      dot: 'Đợt 2',
      truongHop: 'Thanh toán đợt',
      khoangCach: '60 ngày',
      macDinh: false,
      nvTao: 'Lê C',
      ngayTao: '2025-06-01',
      nvCapNhat: 'Lê C',
      ngayCapNhat: '2025-06-02',
    },
  ]);

  const columns: ColumnsType<PaymentScheduleItem> = useMemo(
    () => [
      { title: 'ID', dataIndex: 'id', key: 'id' },
      { title: 'Đợt', dataIndex: 'dot', key: 'dot' },
      { title: 'Trường hợp', dataIndex: 'truongHop', key: 'truongHop' },
      { title: 'Khoảng cách', dataIndex: 'khoangCach', key: 'khoangCach' },
      {
        title: 'Mặc định',
        dataIndex: 'macDinh',
        key: 'macDinh',
        render: (val: boolean) => <Tag color={val ? 'green' : 'default'}>{val ? 'Yes' : 'No'}</Tag>,
      },
      { title: 'Nhân viên tạo', dataIndex: 'nvTao', key: 'nvTao' },
      { title: 'Ngày tạo', dataIndex: 'ngayTao', key: 'ngayTao' },
      { title: 'Nhân viên cập nhật', dataIndex: 'nvCapNhat', key: 'nvCapNhat' },
      { title: 'Ngày cập nhật', dataIndex: 'ngayCapNhat', key: 'ngayCapNhat' },
      {
        title: 'Hành động',
        key: 'action',
        render: (_: any, record: PaymentScheduleItem) => (
          <>
            <Button type="link" onClick={() => history.push(`/project/payment-schedule/${record.id}`)}>
              Xem
            </Button>
          </>
        ),
      },
    ],
    [],
  );

  return (
    <PageContainer title="Lịch thanh toán">
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={() => history.push('/project/payment-schedule/create')}>
          Tạo lịch
        </Button>
      </div>
      <Table<PaymentScheduleItem> rowKey="id" columns={columns} dataSource={data} />
    </PageContainer>
  );
};

export default PaymentSchedule;
