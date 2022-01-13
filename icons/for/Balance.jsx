import React from 'react'

const Balance = React.forwardRef(function Balance(inProps, ref) {
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
      <g clipPath="url(#clip0_25_850)">
        <path
          d="M15 15.8333C15 16.4964 14.7366 17.1323 14.2678 17.6011C13.799 18.0699 13.1631 18.3333 12.5 18.3333C11.837 18.3333 11.2011 18.0699 10.7323 17.6011C10.2634 17.1323 10 16.4964 10 15.8333V9.99999M19.1667 9.99999C18.949 7.71963 17.8892 5.60228 16.1942 4.06137C14.4992 2.52047 12.2908 1.66666 10 1.66666C7.70932 1.66666 5.50084 2.52047 3.80585 4.06137C2.11085 5.60228 1.05104 7.71963 0.833374 9.99999H19.1667Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_25_850">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
})

export default Balance
