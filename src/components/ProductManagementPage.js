// src/components/ProductManagementPage.js
import React from 'react';

const ProductManagementPage = () => {
  return (
    <div className="p-4">
      <div className="flex">
        <input type="text" className="border p-2 mr-2" placeholder="ค้นหาสินค้า..." />
        <button className="bg-green-500 text-white px-4 py-2 rounded">เพิ่มสินค้า</button>
      </div>
      <div className="flex mt-4">
        <div className="w-1/4">
          <ul>
            <li className="p-2 border-b">เรียงจากใหม่ ➔ เก่า</li>
            <li className="p-2 border-b">เรียงจำนวน น้อย ➔ มาก</li>
            <li className="p-2 border-b">เรียงจำนวน มาก ➔ น้อย</li>
            <li className="p-2 border-b">เรียงราคา น้อย ➔ มาก</li>
            <li className="p-2 border-b">เรียงราคา มาก ➔ น้อย</li>
            <li className="p-2 border-b">จำนวน น้อยกว่า ?? ชิ้น</li>
          </ul>
        </div>
        <div className="w-3/4 grid grid-cols-3 gap-4">
          <div className="border p-4">
            <img src="shirt.png" alt="Product" className="h-32 w-32 mx-auto" />
            <p>รหัส: 0019</p>
            <p>ชื่อ: เสื้อ</p>
            <p>ราคาทุน: 110</p>
            <p>ราคาขาย: 120</p>
            <p>จำนวน: 20</p>
          </div>
          <div className="border p-4">
            <img src="box.png" alt="Product" className="h-32 w-32 mx-auto" />
            <p>รหัส: ???</p>
            <p>ชื่อ: ???</p>
            <p>ราคาทุน: ???</p>
            <p>ราคาขาย: ???</p>
            <p>จำนวน: ???</p>
          </div>
          <div className="border p-4">
            <img src="box.png" alt="Product" className="h-32 w-32 mx-auto" />
            <p>รหัส: ???</p>
            <p>ชื่อ: ???</p>
            <p>ราคาทุน: ???</p>
            <p>ราคาขาย: ???</p>
            <p>จำนวน: ???</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductManagementPage;
