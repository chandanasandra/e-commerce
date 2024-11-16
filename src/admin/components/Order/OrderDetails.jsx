import { useLocation } from "react-router-dom";
import useXmlDownloader from '../../hooks/useXmlDownloader'
import { useState } from "react";

const OrderDetails = () => {
  const location = useLocation();
  const order = location.state || {};
  const downloadXml = useXmlDownloader(order);
  return (
    <>
      {order && (
        <>
          <div className="flex flex-col md:flex-row p-4 w-full gap-x-4">
            <div className="border-2 shadow-md rounded-md p-4 hover:-translate-y-1 transition-transform duration-200">
              <h2 className="text-lg text-gray-600 tracking-wide">
                <strong>Order Details</strong>
              </h2>
              <ul className="text-sm tracking-wide mt-2 leading-relaxed" key={order.orderId}>
                <li>
                  <strong>Order Number : </strong>
                  {order.orderId}
                </li>
                <li>
                  <strong>Payment Status : </strong>
                  <select className="appearance-none underline decoration-grey-800 cursor-pointer px-2 focus:outline-none">
                    <option>{order.paymentStatus}</option>
                    <option>{order.paymentStatus === 'Paid' ? 'Unpaid' : 'Paid'}</option>
                  </select>
                </li>
                <li>
                  <strong>Shipping Status : </strong>
                  <select className="appearance-none underline decoration-grey-800 cursor-pointer px-2 focus:outline-none">
                    <option>{order.orderStatus}</option>
                    {order.orderStatus === 'Shipped' ? <><option>Processing</option><option>Delivered</option></> :'' }
                    {order.orderStatus === 'Processing' ? <><option>Shipped</option><option>Delivered</option></> :'' }
                    {order.orderStatus === 'Delivered' ? <><option>Shipped</option><option>Processing</option></> :'' }
                  </select>
                </li>
                <li>
                  <strong>Order Date : </strong>
                  {order.orderDate}
                </li>
                <li>
                  <strong>Delivery Date : </strong>
                  {order.deliveryDate}
                </li>
                <li>
                  <strong>Order Total : </strong>
                  {order.totalAmount}
                </li>
              </ul>
            </div>
            <div className="border-2 shadow-md rounded-md p-4 md-w-1/2 hover:-translate-y-1 transition-transform duration-200">
              <h2 className="text-lg text-gray-600 tracking-wide">
                <strong>Customer Details</strong>
              </h2>
              <ul className="tracking-wide text-sm mt-2 leading-relaxed" key={order.customerId}>
                <li>
                  <strong>Customer Name : </strong>
                  {order.customerName}
                </li>
                <li>
                  <strong>Customer Id : </strong>
                  {order.customerId}
                </li>
                <li>
                  <strong>Customer Email : </strong>
                  {order.customerEmail}
                </li>
                <li>
                  <strong>Phone No : </strong>
                  {order.customerPhone}
                </li>
                <li>
                  <strong>Shipping Address : </strong>
                  {order.shippingAddress.addressLine1},
                  {order.shippingAddress.addressLine2},
                  {order.shippingAddress.city},{order.shippingAddress.state},
                  {order.shippingAddress.postalCode},
                  {order.shippingAddress.country}
                </li>
                <li>
                  <strong>Billing Address : </strong>
                  {order.billingAddress.addressLine1},
                  {order.billingAddress.addressLine2},
                  {order.billingAddress.city},{order.billingAddress.state},
                  {order.billingAddress.postalCode},
                  {order.billingAddress.country}
                </li>
              </ul>
            </div>
          </div>
          <div className="p-4 w-full hover:-translate-y-1 transition-transform duration-200">
            <div className="border-2 shadow-md rounded-md p-4">
              <h2 className="text-lg text-gray-600">
                <strong>Ordered Products</strong>
              </h2>
              <div className="overflow-x-auto mt-2">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th className="px-6 py-3">Product Name</th>
                      <th className="px-6 py-3">Product ID</th>
                      <th className="px-6 py-3">Brand</th>
                      <th className="px-6 py-3">Quantity</th>
                      <th className="px-6 py-3">Unit Price</th>
                      <th className="px-6 py-3">Total Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.items &&
                      order.items.map((item, index) => (
                        <tr
                          key={index}
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                        >
                          <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                            {item.title} - {item.size ? item.size : ''}
                          </td>
                          <td className="px-6 py-4">{item.productId}</td>
                          <td className="px-6 py-4">{item.brand}</td>
                          <td className="px-6 py-4">{item.quantity}</td>
                          <td className="px-6 py-4">{item.unitPrice}</td>
                          <td className="px-6 py-4">{item.totalPrice}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="ml-3 px-2 mt-2">
            <button className="bg-blue-800 text-white px-5 w-80 py-2 rounded-md" onClick={downloadXml}>Export</button>
          </div>
        </>
      )}
    </>
  );
};

export default OrderDetails;
