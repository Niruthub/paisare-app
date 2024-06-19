import React, { useState } from 'react';
import Header from './components/Header';
import PaymentPage from './components/PaymentPage';
import ProductManagementPage from './components/ProductManagementPage';
import SalesReportPage from './components/SalesReportPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('PaymentPage');

  const renderPage = () => {
    switch (currentPage) {
      case 'PaymentPage':
        return <PaymentPage />;
      case 'ProductManagementPage':
        return <ProductManagementPage />;
      case 'SalesReportPage':
        return <SalesReportPage />;
      default:
        return <PaymentPage />;
    }
  };

  const getPageTitle = () => {
    switch (currentPage) {
      case 'PaymentPage':
        return 'คิดเงิน';
      case 'ProductManagementPage':
        return 'จัดการสินค้า';
      case 'SalesReportPage':
        return 'รายงานการขาย';
      default:
        return 'คิดเงิน';
    }
  };

  return (
    <div>
      <Header setCurrentPage={setCurrentPage} pageTitle={getPageTitle()} currentPage={currentPage} />
      <div className="p-4">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;