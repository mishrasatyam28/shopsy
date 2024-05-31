import React from "react";
import { Link } from "react-router-dom";

function ProductTable() {
  return (
    <div>
      <div className=" flex justify-center items-center h-screen">
        <div className=" container mx-auto max-w-7xl">
          <div className="relative overflow-x-auto shadow-md sm:rounded-xl">
            <div className=" bg-[#2f3640] w-[50.1em] lg:w-full flex items-center justify-between p-2">
              <input
                type="text"
                className="w-80 py-1.5 rounded-md px-2 outline-none shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] text-white bg-gray-600 placeholder-gray-300"
                placeholder="Search here"
              />
              <div className="flex items-center space-x-2">
                <img className="w-9" src="/img/react.png" alt="" />
                <h1 className="text-white text-2xl font-semibold">
                  React Firebase CRUD{" "}
                </h1>
              </div>
              <Link to={"/addproduct"}>
                <button className=" bg-gray-600 shadow-md px-6 py-1.5 rounded-md font-bold text-white">
                  Add Product
                </button>
              </Link>
            </div>

            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
              <thead className="text-xs text-gray-100 uppercase bg-[#353b48] ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    S.No.
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-700 border-b border-gray-500 text-white ">
                  <td className="px-6 py-4">1.</td>
                  <td className="px-6 py-4">
                    <img
                      className="w-20"
                      src="https://dummyimage.com/720x400"
                      alt=""
                    />
                  </td>
                  <td className="px-6 py-4">Laptop</td>
                  <td className="px-6 py-4">₹2999</td>
                  <td className="px-6 py-4">Mobile</td>
                  <td className="px-6 py-4">16 Aug 2020</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Del
                    </a>
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>

                <tr className="bg-gray-700 border-b text-white ">
                  <td className="px-6 py-4">1.</td>
                  <td className="px-6 py-4">
                    <img
                      className="w-20"
                      src="https://dummyimage.com/720x400"
                      alt=""
                    />
                  </td>
                  <td className="px-6 py-4">Laptop</td>
                  <td className="px-6 py-4">₹2999</td>
                  <td className="px-6 py-4">Laptop</td>
                  <td className="px-6 py-4">16 Aug 2020</td>
                  <td className="px-6 py-4">
                    <a className="font-medium bg-red-300 px-4 rounded-lg py-1 text-black cursor-pointer  ">
                      Del
                    </a>
                  </td>
                  <td className="px-6 py-4">
                    <a
                      className="font-medium bg-green-300 px-4 rounded-lg py-1 text-black
                                                    cursor-pointer"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductTable;
