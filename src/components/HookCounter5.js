import React, { useState, useEffect } from 'react'

const HookCounter5 = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('useEffect')
        document.title = `Clicked ${count} times`
    })

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
        </div>
    )
}

export default HookCounter5