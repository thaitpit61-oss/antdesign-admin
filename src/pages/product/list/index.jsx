import { PageContainer } from "@ant-design/pro-components";
import { history } from "@umijs/max";
import { Button, Table } from "antd";
import { useMemo, useState } from "react";

const ProductList = () => {
  const [data] = useState([
    {
      stt: 1,
      trangThai: "Available",
      maCan: "C-001",
      duAn: "Dự án A",
      dotBanHang: "Đợt 1",
      loaiSP: "Căn hộ",
      tang: "Tầng 5",
      dienTich: "75 m2",
      donGia: "1,200,000",
      tongGia: "90,000,000",
      chietKhau: "5%",
      tongSauCK: "85,500,000",
    },
    {
      stt: 2,
      trangThai: "Sold",
      maCan: "C-002",
      duAn: "Dự án B",
      dotBanHang: "Đợt 2",
      loaiSP: "Studio",
      tang: "Tầng 3",
      dienTich: "40 m2",
      donGia: "900,000",
      tongGia: "36,000,000",
      chietKhau: "0%",
      tongSauCK: "36,000,000",
    },
  ]);

  const columns = useMemo(
    () => [
      { title: "STT", dataIndex: "stt", key: "stt" },
      { title: "Trạng thái", dataIndex: "trangThai", key: "trangThai" },
      { title: "Mã căn", dataIndex: "maCan", key: "maCan" },
      { title: "Dự án", dataIndex: "duAn", key: "duAn" },
      { title: "Đợt bán", dataIndex: "dotBanHang", key: "dotBanHang" },
      { title: "Loại SP", dataIndex: "loaiSP", key: "loaiSP" },
      { title: "Tầng", dataIndex: "tang", key: "tang" },
      { title: "Diện tích", dataIndex: "dienTich", key: "dienTich" },
      { title: "Đơn giá", dataIndex: "donGia", key: "donGia" },
      { title: "Tổng giá", dataIndex: "tongGia", key: "tongGia" },
      { title: "Chiết khấu", dataIndex: "chietKhau", key: "chietKhau" },
      { title: "Tổng sau CK", dataIndex: "tongSauCK", key: "tongSauCK" },
      {
        title: "Hành động",
        key: "action",
        render: (_text, record) => (
          <Button
            type="link"
            onClick={() => history.push(`/product/${record.maCan}`)}
          >
            Xem
          </Button>
        ),
      },
    ],
    []
  );

  return (
    <PageContainer title="Danh sách sản phẩm">
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={() => history.push("/product/create")}>
          Thêm sản phẩm
        </Button>
      </div>
      <Table rowKey="maCan" columns={columns} dataSource={data} />
    </PageContainer>
  );
};

export default ProductList;
