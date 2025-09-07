import React from 'react';
import NextHead from "next/head";

const SEOHead = ({ title, description }) => {
  return (
    <NextHead>
      <title>{title ? `${title}` : "TaxWeb"}</title>
      <meta name="description" content={description || "TaxWeb - Demo"} />
    </NextHead>
  )
}

export default SEOHead;