import React from 'react'
import Image from 'next/image'

type ButtonProp = {
  className?: string;
  title: string;
  imagePath?: string;
  imageWidth?: number;
  imageHeight?: number;
}

const Button = ({ className, title, imagePath, imageWidth, imageHeight }: ButtonProp) => {
  return (
    <button className={`${className} w-12 h-8 flex justify-center items-center bg-buttonBg rounded-md mr-2`}>
      {imagePath ?
        <Image 
          src={imagePath}
          alt={title}
          width={imageWidth}
          height={imageHeight}
        />
       : <span>{title}</span>
      }
    </button>
  )
}

export default Button