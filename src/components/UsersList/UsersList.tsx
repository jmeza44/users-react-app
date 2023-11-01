import { useUser } from 'hooks/UserHook'

const UsersList: React.FC = () => {
  const { users, deleteUser, changeSelectedUser } = useUser()

  return (
    <div className="relative overflow-x-auto rounded-xl border border-gray-300 dark:border-gray-600">
      <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="whitespace-nowrap px-6 py-3">
              ID
            </th>
            <th scope="col" className="whitespace-nowrap px-6 py-3">
              First name
            </th>
            <th scope="col" className="whitespace-nowrap px-6 py-3">
              Last name
            </th>
            <th scope="col" className="whitespace-nowrap px-6 py-3">
              Created At
            </th>
            <th scope="col" className="whitespace-nowrap px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr
                key={user.id}
                className="border-b border-gray-300 bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                >
                  {user.id}
                </th>
                <td className="whitespace-nowrap px-6 py-4">
                  {user.firstName}
                </td>
                <td className="whitespace-nowrap px-6 py-4">{user.lastName}</td>
                <td className="whitespace-nowrap px-6 py-4">
                  {user.createdDate}
                </td>
                <td className="px-6 py-4">
                  <button
                    type="button"
                    className="mb-1 mr-1 w-auto rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    onClick={() => deleteUser(user.id)}
                  >
                    <svg
                      className="h-[14px] w-[14px] text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="w-auto rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-medium text-white hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900"
                    onClick={() => changeSelectedUser(user.id)}
                  >
                    <svg
                      className="h-[14px] w-[14px] text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z" />
                      <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr className="border-b border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                N/A
              </th>
              <td className="whitespace-nowrap px-6 py-4">N/A</td>
              <td className="whitespace-nowrap px-6 py-4">N/A</td>
              <td className="whitespace-nowrap px-6 py-4">N/A</td>
              <td className="px-6 py-4">
                <button
                  type="button"
                  className="mb-1 mr-1 w-auto cursor-not-allowed rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white focus:outline-none dark:bg-red-600"
                >
                  <svg
                    className="h-[14px] w-[14px] text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="w-auto cursor-not-allowed rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-medium text-white focus:outline-none"
                >
                  <svg
                    className="h-[14px] w-[14px] text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z" />
                    <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z" />
                  </svg>
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default UsersList
