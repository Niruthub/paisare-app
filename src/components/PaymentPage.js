// src/components/PaymentPage.js
import React from 'react';

const PaymentPage = () => {
  return (
    <div className="p-4">
      <div className="bg-gray-100 p-4 rounded mb-4">
        <h1 className="text-4xl text-center mb-4">150.00</h1>
        <div className="flex items-center mb-4">
          <input type="text" className="border p-2 mr-2" placeholder="รหัสสินค้า" />
          <input type="number" className="border p-2" placeholder="จำนวน" />
        </div>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">ลำดับ</th>
              <th className="py-2">รหัส</th>
              <th className="py-2">ชื่อ</th>
              <th className="py-2">ราคา</th>
              <th className="py-2">จำนวน</th>
              <th className="py-2">ส่วนลด</th>
              <th className="py-2">ราคารวม</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">1</td>
              <td className="py-2">0005</td>
              <td className="py-2">สบู่</td>
              <td className="py-2">15</td>
              <td className="py-2">2</td>
              <td className="py-2">0</td>
              <td className="py-2">30</td>
            </tr>
            <tr>
              <td className="py-2">2</td>
              <td className="py-2">0019</td>
              <td className="py-2">เสื้อ</td>
              <td className="py-2">120</td>
              <td className="py-2">1</td>
              <td className="py-2">0</td>
              <td className="py-2">120</td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-between mt-4">
          <button className="bg-red-500 text-white px-4 py-2 rounded">เริ่มใหม่</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">ปรับใบเสร็จ</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
