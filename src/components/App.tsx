import { UserProvider } from 'hooks/UserHook'
import UserForm from './UserForm/UserForm'
import UsersList from './UsersList/UsersList'
import ToastAlert from './ToastAlert/ToastAlert'

function App() {
  return (
    // Full page container
    <div className="h-screen w-screen bg-gray-50 text-gray-950 dark:bg-gray-800 dark:text-white">
      {/* Max with container */}
      <div className="m-auto flex h-full max-w-7xl flex-col justify-center gap-12 max-xl:px-3">
        {/* Header container */}
        <div className="text-center">
          <h1 className="inline-block whitespace-break-spaces text-5xl font-extrabold dark:text-white">
            User React App
          </h1>
          <small className="ml-2 inline-block whitespace-break-spaces text-3xl font-semibold text-blue-500 dark:text-blue-500">
            CRUD Operations with Users
          </small>
        </div>
        <UserProvider>
          {/* Content container */}
          <div className="flex flex-row gap-12 max-xl:flex-col max-xl:items-center max-xl:justify-stretch max-xl:gap-4">
            {/* Form container */}
            <div className="container w-1/3 rounded-xl border border-gray-300 p-5 dark:border-gray-600 max-xl:w-full">
              <UserForm></UserForm>
            </div>
            {/* Users List container */}
            <div className="container w-2/3 max-xl:w-full">
              <UsersList></UsersList>
            </div>
          </div>
          <ToastAlert></ToastAlert>
        </UserProvider>
      </div>
    </div>
  )
}

export default App
