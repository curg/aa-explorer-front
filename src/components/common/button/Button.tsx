"use client"
import React from 'react'
import Image from 'next/image'

type ButtonProp = {
  className?: string;
  title: string;
  imagePath?: string;
  size?: string;
}

const Button = ({ className, title, imagePath, size }: ButtonProp) => {
  return (
    <button className={`${className} flex justify-center items-center bg-buttonBg rounded-md mr-2`}>
      {imagePath ?
        <Image 
          src={imagePath}
          alt={title}
          width="0"
          height="0"
          className={`${size}`}
        />
       : <span>{title}</span>
      }
    </button>
  )
}

export default Button