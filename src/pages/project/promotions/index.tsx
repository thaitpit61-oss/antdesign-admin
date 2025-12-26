import React, { useMemo, useState } from 'react';
import { PageContainer } from '@ant-design/pro-components';
import { Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { history } from '@umijs/max';

type Promotion = {
  id: number;
  duAn: string;
  tenChuongTrinh: string;
  tenQuaTang: string;
  keHoachBanHang: string;
  tuNGay: string;
  denNgay: string;
  tyLe: string;
  tienMat: string;
  nhanVienTao: string;
  ngayTao: string;
  nhanVienCapNhat: string;
  ngayCapNhat: string;
};

const Promotions: React.FC = () => {
  const [data] = useState<Promotion[]>([
    {
      id: 1,
      duAn: 'Dự án A',
      tenChuongTrinh: 'KM Mùa hè',
      tenQuaTang: 'Voucher 100k',
      keHoachBanHang: 'Bán trực tiếp, online',
      tuNGay: '2025-06-01',
      denNgay: '2025-06-30',
      tyLe: '10%',
      tienMat: '100000',
      nhanVienTao: 'Nguyễn A',
      ngayTao: '2025-05-20',
      nhanVienCapNhat: 'Trần B',
      ngayCapNhat: '2025-05-25',
    },
    {
      id: 2,
      duAn: 'Dự án B',
      tenChuongTrinh: 'KM Khai trương',
      tenQuaTang: 'Phiếu quà 50k',
      keHoachBanHang: 'Event, social',
      tuNGay: '2025-07-01',
      denNgay: '2025-07-15',
      tyLe: '5%',
      tienMat: '50000',
      nhanVienTao: 'Lê C',
      ngayTao: '2025-06-10',
      nhanVienCapNhat: 'Lê C',
      ngayCapNhat: '2025-06-10',
    },
  ]);

  const columns: ColumnsType<Promotion> = useMemo(
    () => [
      { title: 'ID', dataIndex: 'id', key: 'id' },
      { title: 'Dự án', dataIndex: 'duAn', key: 'duAn' },
      { title: 'Tên chương trình', dataIndex: 'tenChuongTrinh', key: 'tenChuongTrinh' },
      { title: 'Quà tặng', dataIndex: 'tenQuaTang', key: 'tenQuaTang' },
      { title: 'Kế hoạch bán hàng', dataIndex: 'keHoachBanHang', key: 'keHoachBanHang' },
      { title: 'Từ ngày', dataIndex: 'tuNGay', key: 'tuNGay' },
      { title: 'Đến ngày', dataIndex: 'denNgay', key: 'denNgay' },
      { title: 'Tỷ lệ', dataIndex: 'tyLe', key: 'tyLe' },
      { title: 'Tiền mặt', dataIndex: 'tienMat', key: 'tienMat' },
      { title: 'Nhân viên tạo', dataIndex: 'nhanVienTao', key: 'nhanVienTao' },
      { title: 'Ngày tạo', dataIndex: 'ngayTao', key: 'ngayTao' },
      { title: 'Nhân viên cập nhật', dataIndex: 'nhanVienCapNhat', key: 'nhanVienCapNhat' },
      { title: 'Ngày cập nhật', dataIndex: 'ngayCapNhat', key: 'ngayCapNhat' },
      {
        title: 'Hành động',
        key: 'action',
        render: (_: any, record: Promotion) => (
          <>
            <Button type="link" onClick={() => history.push(`/project/promotions/${record.id}`)}>
              Xem
            </Button>
          </>
        ),
      },
    ],
    [],
  );

  return (
    <PageContainer title="Chương trình khuyến mãi">
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={() => history.push('/project/promotions/create')}>
          Tạo chương trình
        </Button>
      </div>
      <Table<Promotion> rowKey="id" columns={columns} dataSource={data} />
    </PageContainer>
  );
};

export default Promotions;
