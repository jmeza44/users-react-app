import React, { ReactNode, useState } from 'react'

// Define a User interface to strongly type user objects
export interface User {
  id: number
  firstName: string
  lastName: string
  createdDate: string
}

// Define the UserContext and its provider
interface UserContextType {
  users: User[]
  selectedUser: User | null
  addUser: (user: User) => void
  editUser: (user: User) => void
  deleteUser: (userId: number) => void
  getUniqueId: () => number
  changeSelectedUser: (userId: number) => void
}

export const UserContext = React.createContext<UserContextType | undefined>(
  undefined
)

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [users, setUsers] = useState<User[]>([
    {
      id: 810,
      firstName: 'John',
      lastName: 'Doe',
      createdDate: new Date(2023, 9, 31).toDateString() // October is represented as 9 (0-based index)
    },
    {
      id: 820,
      firstName: 'Jane',
      lastName: 'Smith',
      createdDate: new Date(2023, 9, 30).toDateString()
    },
    {
      id: 830,
      firstName: 'Alice',
      lastName: 'Johnson',
      createdDate: new Date(2023, 9, 29).toDateString()
    }
  ])
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  const addUser = (user: User) => {
    setUsers([...users, user])
  }

  const editUser = (editedUser: User) => {
    const updatedUsers = users.map((user) =>
      user.id === editedUser.id ? editedUser : user
    )
    setUsers(updatedUsers)
  }

  const deleteUser = (userId: number) => {
    const userToDelete = users.find((user) => user.id === userId) ?? null
    if (userToDelete && userToDelete.id === selectedUser?.id)
      changeSelectedUser(-1)
    const filteredUsers = users.filter((user) => user !== userToDelete)
    setUsers(filteredUsers)
  }

  const getUniqueId = (): number => {
    let newId: number
    do {
      newId = Math.floor(Math.random() * 1000) // Generate a random ID
    } while (users.some((user) => user.id === newId)) // Check if the ID already exists in the users array
    return newId
  }

  const changeSelectedUser = (userId: number) => {
    setSelectedUser(users.find((user) => user.id === userId) ?? null)
  }

  return (
    <UserContext.Provider
      value={{
        users,
        selectedUser,
        addUser,
        editUser,
        deleteUser,
        getUniqueId,
        changeSelectedUser
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

// Create a custom hook for using the UserContext
export const useUser = () => {
  const context = React.useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
