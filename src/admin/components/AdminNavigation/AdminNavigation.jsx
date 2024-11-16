import { Link } from "react-router-dom";

const AdminNavigation = () => {
  return (
    <div className="flex flex-col">
      <div className="mb-2 md:border-b py-2">
        <div className="container mx-auto">
          <div className="flex justify-between gap-2">
            <Link to='/admin'>
            <img
              className="w-12 ml-3"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              alt="Logo"
            />
            </Link>
            <ul className="hidden sm:flex">
              <li className="float-left">
                <a className="flex cursor-pointer gap-1 rounded-sm px-3 py-1 mt-2 capitalize decoration-indigo-500 decoration-2 underline-offset-1 transition duration-300 ease-in-out" href='/admin'>
                  <span className="text-sm font-medium text-gray-700 hover:text-gray-800"> Account </span>
                </a>
              </li>
              <li className="float-left">
                <a className="flex cursor-pointer items-center gap-1 rounded-sm px-3 py-1 mr-2 mt-2 capitalize decoration-indigo-500 decoration-2 underline-offset-1 transition duration-300 ease-in-out" href='/admin'>
                  <span className="text-sm font-medium text-gray-700 hover:text-gray-800"> Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:hidden border-b pl-3">
          <a className="flex cursor-pointer items-center gap-1 rounded-sm px-2 py-1 mt-2 capitalize decoration-indigo-500 decoration-2 underline-offset-1 transition duration-300 ease-in-out" href='/admin'>
            <span className="text-sm font-medium text-gray-700 hover:text-gray-800">Dashboard</span>
          </a>
          <a className="flex cursor-pointer items-center gap-1 rounded-sm px-2 py-1 mt-2 capitalize decoration-indigo-500 decoration-2 underline-offset-1 transition duration-300 ease-in-out" href='/admin'>
            <span className="text-sm font-medium text-gray-700 hover:text-gray-800">Logout</span>
          </a>
      </div>
    </div>
  );
};

export default AdminNavigation;
