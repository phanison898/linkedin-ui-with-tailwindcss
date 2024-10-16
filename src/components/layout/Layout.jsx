import React from 'react'

const Layout = ({children}) => {
  return (
    <div className="w-screen h-auto flex flex-col items-center bg-[#f4f2ee]">{children}</div>
  )
}

export default Layout