import React, { useState } from 'react'
import HookCounter7 from './HookCounter7'

const HookCounter8 = () => {

  const [display, setDisplay] = useState(true)

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <HookCounter7 />}
    </div>
  )
}

export default HookCounter8