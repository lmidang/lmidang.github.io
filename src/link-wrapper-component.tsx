
import React from 'react'

export const LinkWrapper = ({linkOut, children}: {
  linkOut: string | undefined,
  children: React.ReactNode
}) => {
  if (linkOut) {
    return (
      <a href={linkOut} target="_blank">
        {children}
      </a>
    )
  }
  return <>{children}</>
}