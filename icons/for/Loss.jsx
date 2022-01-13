import React from 'react'

const Loss = React.forwardRef(function Loss(inProps, ref) {
  return (
    <svg
      ref={ref}
      {...inProps}
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 6.66666C11.3807 6.66666 12.5 5.54737 12.5 4.16666C12.5 2.78594 11.3807 1.66666 10 1.66666C8.61929 1.66666 7.5 2.78594 7.5 4.16666C7.5 5.54737 8.61929 6.66666 10 6.66666Z"
        stroke="black"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 18.3333V6.66666"
        stroke="black"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.16663 10H1.66663C1.66663 12.2101 2.5446 14.3298 4.1074 15.8926C5.67021 17.4554 7.78982 18.3333 9.99996 18.3333C12.2101 18.3333 14.3297 17.4554 15.8925 15.8926C17.4553 14.3298 18.3333 12.2101 18.3333 10H15.8333"
        stroke="black"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
})

export default Loss
