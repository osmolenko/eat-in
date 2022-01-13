import React from 'react'

const Health = React.forwardRef(function Health(inProps, ref) {
  return (
    <svg
      ref={ref}
      {...inProps}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.3333 10H15L12.5 17.5L7.49996 2.5L4.99996 10H1.66663"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
})

export default Health
