import { Icon } from "@/types/Icon"
import React from "react"

export const CheckIcon = ({ className, width, height, color, ...rest }: Icon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    className={`${className}`}
    {...rest}
  >
      <path
        fill={`${color || "#fff"}`}
        d="M5.923.478C3.028 1.514 1.195 3.453.345 6.348c-.77 2.71.107 6.057 2.178 8.129 3.241 3.214 8.713 3.214 11.954 0 2.417-2.444 3.134-6.402 1.7-9.457C14.344 1.142 9.775-.903 5.923.478Zm7.464 4.914c.24.399-.132.903-2.789 3.506-1.7 1.674-3.214 3.055-3.373 3.055-.186 0-1.09-.744-2.072-1.673-1.301-1.222-1.7-1.753-1.567-2.125.292-.744 1.142-.532 2.417.664l1.195 1.115 2.577-2.576c1.408-1.435 2.736-2.55 2.948-2.524.213.054.505.293.664.558Z"
      />
  </svg>
)