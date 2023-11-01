import { User, useUser } from 'hooks/UserHook'
import { useCallback, useEffect, useState } from 'react'

const UserForm: React.FC = () => {
  const { selectedUser, addUser, editUser, getUniqueId, changeSelectedUser } =
    useUser() // Access the addUser function from the context

  // Local state for form input fields
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [isEditing, setIsEditing] = useState(false)

  const handleAddOrEditUser = () => {
    if (firstName.trim() === '' || lastName.trim() === '') return

    if (isEditing) {
      editUser({
        id: selectedUser!.id,
        firstName: firstName,
        lastName: lastName,
        createdDate: new Date().toDateString()
      })
      restoreState()
    } else {
      // Create a new user object
      const newUser = {
        id: getUniqueId(), // Replace with a proper ID generation logic
        firstName,
        lastName,
        createdDate: new Date().toDateString() // Replace with a proper date generation logic
      }
      // Call the addUser function to add the user
      addUser(newUser)
      restoreState()
    }
  }

  const handleCancelEditing = () => {
    restoreState()
  }

  const restoreState = useCallback(() => {
    setFirstName('')
    setLastName('')
    changeSelectedUser(-1)
    setIsEditing(false)
  }, [changeSelectedUser])

  const editUserState = (user: User) => {
    setFirstName(user.firstName)
    setLastName(user.lastName)
    setIsEditing(true)
  }

  // Use the useEffect hook to listen for changes in the selected user and users array
  useEffect(() => {
    if (selectedUser) {
      editUserState(selectedUser)
    } else {
      restoreState()
    }
  }, [restoreState, selectedUser]) // Include the selected user and the users array in the dependency array

  return (
    <form>
      <div className="mb-6">
        <label
          htmlFor="firstName"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          First Name
        </label>
        <input
          type="firstName"
          id="firstName"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Your first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="lastName"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Last Name
        </label>
        <input
          type="lastName"
          id="lastName"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Your last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="flex gap-3">
        <button
          type="button"
          className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
          onClick={handleAddOrEditUser}
        >
          {isEditing ? 'Edit' : 'Add'}
        </button>
        {isEditing ? (
          <button
            type="button"
            className="w-full rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 sm:w-auto"
            onClick={handleCancelEditing}
          >
            Cancel
          </button>
        ) : (
          <></>
        )}
      </div>
    </form>
  )
}

export default UserForm
