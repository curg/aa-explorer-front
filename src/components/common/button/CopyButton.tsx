"use client"
import React, { useState } from 'react'
import { copyText } from '@/src/utils/copyText';
import { CheckIcon, CopyIcon } from '../../icons';
import { motion } from 'framer-motion';

type Prop = {
  text: string;
}

const CopyButton = ({ text }: Prop) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const handleCopyText = () => {
    copyText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1000);
  }
  return (
    <motion.button
      onClick={handleCopyText} 
      className='ml-2 duration-75'
      whileTap={{y:2}}>
      {isCopied ? (
          <CheckIcon width={17} height={17} />
      ) : (
        <CopyIcon width={17} height={17} />
      )}
    </motion.button>
  )
}

export default CopyButton