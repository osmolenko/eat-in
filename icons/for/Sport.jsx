import React from 'react'

const Sport = React.forwardRef(function Sport(inProps, ref) {
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
        d="M18.3333 9.23333V10C18.3323 11.797 17.7504 13.5456 16.6744 14.9849C15.5984 16.4241 14.086 17.4771 12.3628 17.9866C10.6395 18.4961 8.79768 18.4349 7.11202 17.8122C5.42636 17.1894 3.98717 16.0384 3.00909 14.5309C2.03101 13.0234 1.56645 11.2401 1.68469 9.44693C1.80293 7.6538 2.49763 5.94694 3.66519 4.58089C4.83275 3.21485 6.41061 2.26282 8.16345 1.86679C9.91629 1.47076 11.7502 1.65195 13.3916 2.38333"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3333 3.33334L10 11.675L7.5 9.17501"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
})

export default Sport
