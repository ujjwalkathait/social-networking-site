import { Outlet, Navigate } from "react-router-dom"

const AuthLayout = () => {
  const isAuthenticated = false;
  return (
    <>
      {isAuthenticated ? (
        <Navigate to='/' />
      ) : (
        <>
          <section className="">
            <Outlet />
          </section>
        </>

      )}
    </>
  )
}

export default AuthLayout