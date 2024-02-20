"use client";

import { User } from "@/interfaces";

interface Props {
  users: User[];
}

export const UsersTable = ({ users }: Props) => {
  return (
    <tbody>
      {users.map((user) => (
        <tr
          key={user.id}
          className="bg-white buser-b transition duration-300 ease-in-out hover:bg-gray-100"
        >
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            <input
              type="text"
              value={user.id}
              className="w-full border-gray-500 border "
            />
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            {user.name}
          </td>
          <td className="flex items-center text-sm  text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            {user.email}
          </td>
          <td className="text-sm text-gray-900 font-light px-6 ">
            <select
              name="role"
              id="role"
              value={user.role}
              onChange={(e) => console.log(e.target.value)}
            >
              <option value="ADMIN">Admin</option>
              <option value="USER">User</option>
            </select>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
