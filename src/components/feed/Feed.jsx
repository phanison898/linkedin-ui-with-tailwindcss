import React from 'react'

const Feed = ({children}) => {
  return (
    <div className="w-2/5 h-auto flex flex-col items-center gap-3">{children}</div>
  )
}

export default Feed