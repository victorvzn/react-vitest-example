import React, { useState } from 'react'

type AccordionProps = {
  title: string,
  children: React.ReactElement
}

export const Accordion = ({ children, title }:AccordionProps) => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <div onClick={() => setOpen(!open)}>
        <h3>{title}</h3>

        {open && <div>{children}</div>}
      </div>
    </div>
  )
}
