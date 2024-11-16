import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useDebounce } from "../../hooks/useDebounce";

const OrderTable = ({ orders }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const [filteredOrders, setFilteredOrders] = useState(orders); // Filtered list
  const [searchVal, setSearchVal] = useState("");
  const debouncedSearchVal = useDebounce(searchVal, 1000);

  useEffect(() => {
    if (debouncedSearchVal === "") {
      setFilteredOrders(orders); // Reset to full list if searchVal is empty
    } else {
      const filterBySearch = orders.filter((item) =>
        item.orderId.toLowerCase().includes(debouncedSearchVal.toLowerCase())
      );
      setFilteredOrders(filterBySearch);
    }
  }, [debouncedSearchVal, orders]);

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);

  return (
    <div className="p-4 mx-auto flex justify-center">
      <div className="relative overflow-x-auto sm:rounded-lg">
        <div className="pb-4 bg-white dark:bg-gray-900">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <FiSearch className="text-gray-500 text-lg" />
            </div>
            <input
              type="text"
              id="table-search"
              className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Order Number"
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
            />
          </div>
        </div>
        {filteredOrders.length > 0 ? (
          <>
            {/* Table for desktop */}
            <table className="sm:block hidden w-full text-sm xxl:text-xl text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-all-search"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="checkbox-all-search" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Order Number
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Order Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Customer Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {currentOrders.map((order) => (
                  <tr
                    key={order.customerId + order.orderId}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {order.orderId}
                    </th>
                    <td className="px-6 py-4">{order.orderDate}</td>
                    <td className="px-6 py-4">{order.customerName}</td>
                    <td className="px-6 py-4">{order.customerEmail}</td>
                    <td className="px-6 py-4">{order.totalAmount}</td>
                    <td className="px-6 py-4">{order.orderStatus}</td>
                    <td className="px-6 py-4">
                      <Link
                        to="/admin/orderdetails"
                        state={order}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Pagination Component */}
            <div className="block sm:hidden">
              {/* Display data in a stacked format */}
              {currentOrders &&
                currentOrders.map((order) => (
                  <div className="p-4 border-b" key={"key:" + order}>
                    <div>
                      <strong>Order ID:</strong> {order.orderId}
                    </div>
                    <div>
                      <strong>Customer Name:</strong> {order.customerName}
                    </div>
                    <div>
                      <strong>Order Date:</strong> {order.orderDate}
                    </div>
                    <div>
                      <strong>Total Amount:</strong> {order.totalAmount}
                    </div>
                    <div>
                      <strong>Status:</strong> {order.orderStatus}
                    </div>
                    <div><Link
                        to="/admin/orderdetails"
                        state={order}
                        className="font-medium text-blue-600 dark:text-blue-500 underline"
                      >
                        Edit
                      </Link></div>
                  </div>
                ))}
            </div>
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            />
          </>
        ) : (
          <h2 className="text-center text-gray-600 text-md font-sm">
            No orders found
          </h2>
        )}
      </div>
    </div>
  );
};

export default OrderTable;
