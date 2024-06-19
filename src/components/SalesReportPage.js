// src/components/SalesReportPage.js
import React from 'react';

const SalesReportPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">รายงานการขาย</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">ลำดับ</th>
            <th className="py-2">รหัส</th>
            <th className="py-2">ชื่อ</th>
            <th className="py-2">ราคา</th>
            <th className="py-2">จำนวน</th>
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
            <td className="py-2">30</td>
          </tr>
          <tr>
            <td className="py-2">2</td>
            <td className="py-2">0019</td>
            <td className="py-2">เสื้อ</td>
            <td className="py-2">120</td>
            <td className="py-2">1</td>
            <td className="py-2">120</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SalesReportPage;
