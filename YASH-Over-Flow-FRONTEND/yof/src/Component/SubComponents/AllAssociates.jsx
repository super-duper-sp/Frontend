import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllAssociates } from "../../features/Associates/associateAction"; // Ensure this action is imported

const AllAssociates = () => {
  const { associates } = useSelector((state) => state.associates);
  const { token } = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(fetchAllAssociates());
    }
  }, [dispatch, token]);

  // Table headers and keys
  const theadData = ["Select", "Emp ID", "Name", "Email"];
  const tbodyDataKey = ["empId", "fullName", "emailAdd"];

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Associates List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              {theadData.map((heading, index) => (
                <th key={index} className="py-2 px-4 border-b text-left">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {associates.length > 0 ? (
              associates.map((associate) => (
                <tr key={associate.empId}>
                  <td className="py-2 px-4 border-b">
                    <input type="checkbox" />
                  </td>
                  {tbodyDataKey.map((key, index) => (
                    <td key={index} className="py-2 px-4 border-b">
                      {associate[key]}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={theadData.length} className="text-center py-4">
                  No associates found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllAssociates;