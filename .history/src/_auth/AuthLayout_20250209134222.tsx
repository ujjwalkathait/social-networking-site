import { Outlet, Navigate } from "react-router-dom"

const AuthLayout = () => {
  const isAuthenticated = false;
  return (
    <>
      {isAuthenticated ? (
        <Navigate to='/' />
      ) : (
        <>
          <section>
            
          </section>
        </>
        <Outlet />

      )}
    </>
  )
}

export default AuthLayout