import React from 'react'

type metaDataProps = {
  title?: string;
  description?: string;
}

const Head = ({ title, description }: metaDataProps) => {
  const docTitle = title || "AA-rounge";
  const docDescription = description || 'Blockchain Explorer';
  return (
    <>
      <title>{docTitle}</title>
      <meta name='title' content={docTitle} />
      <meta name='description' content={docDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel='icon' href="/favicon.ico" />
    </>
  )
}

export default Head