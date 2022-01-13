import React from 'react'

const Chevron = React.forwardRef(function Chevron(inProps, ref) {
  return (
    <svg
      ref={ref}
      {...inProps}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 9L12 15L18 9"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
})

export default Chevron
