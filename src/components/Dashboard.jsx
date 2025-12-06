// src/components/Dashboard.jsx

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsersRequest, createUser, updateUser, deleteUser } from "../redux/actions/userActions";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, [dispatch]);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">User Dashboard</h2>

      {loading && <p className="text-gray-600">Loading...</p>}
      {error && <p className="text-red-500 font-medium">Error: {error}</p>}

      <div className="mb-6 flex gap-3">
  <input
    type="text"
    id="newUser"
    placeholder="Enter name"
    className="border px-3 py-2 rounded"
    onChange={(e) => (window.newUserName = e.target.value)}
  />

  <button
    onClick={() => {
      const newUser = {
        id: Date.now(),
        name: window.newUserName || "Untitled",
        email: "new@example.com",
        address: { city: "Unknown" }
      };
      dispatch(createUser(newUser));
    }}
    className="px-4 py-2 bg-green-600 text-white rounded"
  >
    Add User
  </button>
</div>


      {!loading && !error && (
        <div className="overflow-x-auto shadow-lg rounded-xl border border-gray-200">
          <table className="min-w-full text-left text-gray-700">
            <thead className="bg-gray-100 text-gray-900">
              <tr>
                <th className="px-6 py-3 text-sm font-semibold">ID</th>
                <th className="px-6 py-3 text-sm font-semibold">Name</th>
                <th className="px-6 py-3 text-sm font-semibold">Email</th>
                <th className="px-6 py-3 text-sm font-semibold">City</th>
                <th className="px-6 py-3 text-sm font-semibold">Actions</th>
              </tr>
            </thead>

            <tbody>
              {data.map((u) => (
                <tr key={u.id} className="hover:bg-indigo-50">
                  <td className="px-6 py-4">{u.id}</td>
                  <td className="px-6 py-4">{u.name}</td>
                  <td className="px-6 py-4">{u.email}</td>
                  <td className="px-6 py-4">{u.address.city}</td>

                  {/* CRUD Buttons */}
                  <td className="px-6 py-4 flex gap-3">
                    <button
                      onClick={() =>
                        dispatch(updateUser({ ...u, name: prompt("New name:", u.name) }))
                      }
                      className="px-3 py-1 bg-blue-500 text-white rounded"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => dispatch(deleteUser(u.id))}
                      className="px-3 py-1 bg-red-600 text-white rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
