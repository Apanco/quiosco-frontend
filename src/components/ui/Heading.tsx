import React from 'react'

export default function Heading({children} : {children : React.ReactNode}) {
  return (
    <div className=" w-full px-5 py-10">
        <h2 className=" text-2xl font-bold">
            {children}
        </h2>
    </div>
  )
}
