import React, { Component } from 'react'

export default function Switch({ on, classname='', ...props}) {
  return (
    <div>
      <input
        type="checkbox"
        defaultChecked={on}
        onClick={props.toggle}
        onChange={() => {}}
      />
    </div>
  )
}
