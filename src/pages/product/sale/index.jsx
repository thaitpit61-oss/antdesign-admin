import React, { useMemo, useState } from 'react';
import { PageContainer } from '@ant-design/pro-components';
import { Table, Button } from 'antd';
import { history } from '@umijs/max';

const ProductSale = () => {
  const [data] = useState([
    {
      id: 'S-001',
      quyetDinh: 'QD-01',
      duAn: 'Dự án A',
      dot: 'Đợt 1',
      ngayBatDau: '2025-06-01',
      ngayKetThuc: '2025-06-30',
      thoiGianGiao: '30 ngày',
      soNguoi: 5,
      dienGia: '1,000,000',
      donGia: '900,000',
    },
    {
      id: 'S-002',
      quyetDinh: 'QD-02',
      duAn: 'Dự án B',
      dot: 'Đợt 2',
      ngayBatDau: '2025-07-01',
      ngayKetThuc: '2025-07-15',
      thoiGianGiao: '15 ngày',
      soNguoi: 3,
      dienGia: '800,000',
      donGia: '750,000',
    },
  ]);

  const columns = useMemo(
    () => [
      { title: 'ID', dataIndex: 'id', key: 'id' },
      { title: 'Quyết định', dataIndex: 'quyetDinh', key: 'quyetDinh' },
      { title: 'Dự án', dataIndex: 'duAn', key: 'duAn' },
      { title: 'Đợt', dataIndex: 'dot', key: 'dot' },
      { title: 'Ngày bắt đầu', dataIndex: 'ngayBatDau', key: 'ngayBatDau' },
      { title: 'Ngày kết thúc', dataIndex: 'ngayKetThuc', key: 'ngayKetThuc' },
      { title: 'Thời gian giao', dataIndex: 'thoiGianGiao', key: 'thoiGianGiao' },
      { title: 'Số người', dataIndex: 'soNguoi', key: 'soNguoi' },
      { title: 'Diện giá', dataIndex: 'dienGia', key: 'dienGia' },
      { title: 'Đơn giá', dataIndex: 'donGia', key: 'donGia' },
      {
        title: 'Hành động',
        key: 'action',
        render: (_text, record) => (
          <Button type="link" onClick={() => history.push(`/product/sale/${record.id}`)}>
            Xem
          </Button>
        ),
      },
    ],
    [],
  );

  return (
    <PageContainer title="Đợt mở bán">
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={() => history.push('/product/sale/create-sale')}>
          Thêm đợt mở bán
        </Button>
      </div>
      <Table rowKey="id" columns={columns} dataSource={data} />
    </PageContainer>
  );
};

export default ProductSale;
