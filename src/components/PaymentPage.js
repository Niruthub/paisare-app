// src/components/PaymentPage.js
import React, { useState, useRef, useEffect } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import {
  ExclamationTriangleIcon,
  ArrowPathIcon,
  PrinterIcon,
} from "@heroicons/react/24/outline";

const PaymentPage = () => {
  // Mockup data
  const [data, setData] = useState([
    {
      id: 1,
      code: "0005",
      name: "สบู่",
      price: 15,
      quantity: 2,
      discount: 0,
      total: 30,
    },
    {
      id: 2,
      code: "0019",
      name: "เสื้อ",
      price: 120,
      quantity: 1,
      discount: 0,
      total: 120,
    },
    {
      id: 3,
      code: "0020",
      name: "แชมพู",
      price: 55,
      quantity: 3,
      discount: 10,
      total: 155,
    },
    {
      id: 4,
      code: "0021",
      name: "ครีมอาบน้ำ",
      price: 70,
      quantity: 1,
      discount: 5,
      total: 65,
    },
    {
      id: 5,
      code: "0022",
      name: "ยาสีฟัน",
      price: 35,
      quantity: 4,
      discount: 0,
      total: 140,
    },
    {
      id: 6,
      code: "0023",
      name: "ผ้าเช็ดตัว",
      price: 250,
      quantity: 2,
      discount: 20,
      total: 480,
    },
    {
      id: 7,
      code: "0024",
      name: "น้ำยาบ้วนปาก",
      price: 90,
      quantity: 3,
      discount: 15,
      total: 255,
    },
    {
      id: 8,
      code: "0025",
      name: "แป้ง",
      price: 40,
      quantity: 5,
      discount: 0,
      total: 200,
    },
    {
      id: 9,
      code: "0026",
      name: "ลิปสติก",
      price: 150,
      quantity: 1,
      discount: 0,
      total: 150,
    },
    {
      id: 10,
      code: "0027",
      name: "น้ำหอม",
      price: 300,
      quantity: 1,
      discount: 50,
      total: 250,
    },
  ]);
  const [total, setTotal] = useState(0);
  const tableRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);
  const [dataToDelete, setDataToDelete] = useState(null);

  // ฟังก์ชัน handle สำหรับเพิ่มข้อมูลเข้าไปใน data (test)
  //TODO ทำให้เป็นส่วนของ ยิง qrcode เพิ่มรายการ
  const handleAddData = () => {
    const newData = {
      id: data.length + 1,
      code: "???",
      name: "???",
      price: 0,
      quantity: 1,
      discount: 0,
      total: 10,
    };
    setData([...data, newData]);
  };

  const handleDeleteData = (id = null) => {
    setDataToDelete(data.find((item) => item.id === id));
    setIdToDelete(id);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    const newData = idToDelete
      ? data.filter((item) => item.id !== idToDelete)
      : [];
    setData(newData);
    setDataToDelete(null);
    setIdToDelete(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (tableRef.current) {
      tableRef.current.scrollTop = tableRef.current.scrollHeight;
    }
  }, [data]);

  return (
    <>
      {/* Modal */}
      <Transition show={isModalOpen}>
        <Dialog className="relative z-10" onClose={setIsModalOpen}>
          <TransitionChild
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </TransitionChild>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <ExclamationTriangleIcon
                          className="h-6 w-6 text-red-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <DialogTitle
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          ต้องการลบรายการนี้หรือไม่ ?
                        </DialogTitle>
                        <div className="mt-2 flex justify-end">
                          <p className="text-sm text-gray-500">
                            {dataToDelete ? (
                              <span className="text-2xl">
                                {dataToDelete.name}
                              </span>
                            ) : (
                              <b className="text-2xl">ทั้งหมด</b>
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                      onClick={() => confirmDelete()}
                    >
                      ลบ
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setIsModalOpen(false)}
                      data-autofocus
                    >
                      ยกเลิก
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>

      <div className="p-4">
        <div className="bg-gray-100 p-4 rounded-xl mb-4">
          <div className="grid grid-cols-3 gap-4 h-40">
            <div className="col-span-2 bg-blue-800 flex items-center justify-end rounded-xl">
              <h1 className="text-9xl text-white me-5">{total}</h1>
            </div>
            <div className="flex items-center justify-center">
              //TODO: ทำให้เป็นรูปสินค้าล่าสุดที่ยิง qrcode
              <img src="box.png" alt="product" className="h-40" />
            </div>
          </div>

          <div className="flex items-center mb-4 pt-3 pb-3 gap-2">
            <b>รหัสสินค้า</b>
            <input
              type="text"
              className="border p-2 mr-2 text-end"
              placeholder="รหัสสินค้า"
            />
            <b>จำนวน</b>

            <input
              type="number"
              className="border p-2 text-end"
              placeholder="จำนวน"
            />
          </div>

          <div className="overflow-auto max-h-80" ref={tableRef}>
            <table className="table-auto w-full bg-white border border-gray-300">
              <thead className="sticky top-0">
                <tr className="bg-gray-200">
                  <th className="py-2 px-4">ลำดับ</th>
                  <th className="py-2 px-4">รหัส</th>
                  <th className="py-2 px-4">ชื่อ</th>
                  <th className="py-2 px-4">ราคา</th>
                  <th className="py-2 px-4">จำนวน</th>
                  <th className="py-2 px-4">ส่วนลด</th>
                  <th className="py-2 px-4">ราคารวม</th>
                  <th className="py-2 px-4"></th>
                </tr>
              </thead>
              <tbody>
                {data.map((product, index) => (
                  <tr
                    key={product.id}
                    className="hover:bg-gray-100 text-center border border-gray-200"
                  >
                    <td className="py-2 px-4">{index + 1}</td>
                    <td className="py-2 px-4">{product.code}</td>
                    <td className="py-2 px-4">{product.name}</td>
                    <td className="py-2 px-4">{product.price}</td>
                    <td className="py-2 px-4">{product.quantity}</td>
                    <td className="py-2 px-4">{product.discount}</td>
                    <td className="py-2 px-4">{product.total}</td>
                    <td className="py-2 px-4">
                      <button
                        className="text-red-500 hover:bg-red-200"
                        onClick={() => handleDeleteData(product.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-5 fixed bottom-0 right-0 p-6 mt-4">
        <button
          className="bg-red-400 text-2xl px-4 py-2 rounded-xl flex items-center border-4 border-black"
          onClick={() => handleDeleteData(null)}
        >
          <ArrowPathIcon className="h-10 w-10 mr-1" />
          เริ่มใหม่
        </button>
        //TODO: ปริ้นกดแล้วเกิดอะไร
        <button className="bg-green-400 text-2xl px-4 py-2 rounded-xl flex items-center border-4 border-black">
          <PrinterIcon className="h-10 w-10 mr-1" />
          ปรับใบเสร็จ
        </button>
      </div>
    </>
  );
};

export default PaymentPage;
