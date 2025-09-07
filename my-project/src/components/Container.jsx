import React from 'react';
import clsx from 'clsx';

const Container = (props) => {
  const { className, ...res } = props;
  const classes = clsx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)
  return (
    <div className={classes} {...res} />
  )
}

export default Container