import React from 'react';

const Header = ({ setCurrentPage, pageTitle ,currentPage}) => {
  const getImgLogo = () => {
    switch (currentPage) {
      case 'ProductManagementPage':
        return 'box.png';
      case 'SalesReportPage':
        return 'dashboard.png';
      default:
        return 'bill.png';
    }
  };
  return (
    <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={getImgLogo()} alt="Logo" className="h-8 w-8 mr-2" />
        <h1 className="text-3xl">{pageTitle}</h1>
      </div>
      <div className="flex space-x-4">
        <button 
          className="bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-400" 
          onClick={() => setCurrentPage('PaymentPage')}
        >
          คิดเงิน
        </button>
        <button 
          className="bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-400" 
          onClick={() => setCurrentPage('ProductManagementPage')}
        >
          จัดการสินค้า
        </button>
        <button 
          className="bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-400" 
          onClick={() => setCurrentPage('SalesReportPage')}
        >
          รายงานการขาย
        </button>
      </div>
    </div>
  );
};

export default Header;
