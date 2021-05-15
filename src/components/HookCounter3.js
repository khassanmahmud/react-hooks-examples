import React, { useState } from 'react'

const HookCounter = () => {
    const [name, setName] = useState({ firstName: '', lastName: '' })
    console.log(typeof JSON.stringify(name))

    return (
        <form>
            <input
                type="text"
                value={name.firstName}
                onChange={e => setName({ ...name, firstName: e.target.value })}
            />
            <input
                type="text"
                value={name.lastName}
                onChange={e => setName({ ...name, lastName: e.target.value })}
            />
            <h2>My fistname is: {name.firstName}</h2>
            <h2>My lastname is: {name.lastName}</h2>
            <h3>{JSON.stringify(name)}</h3>
        </form>
    )
}
export default HookCounter