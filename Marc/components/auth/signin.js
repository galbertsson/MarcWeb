import React from 'react'

const SignIn = ({onChange, submit}) => {
    return (
        <form>
            <input type="email" name="email" onChange={onChange} />
            <input type="password" name="password" onChange={onChange} />
            <button onClick={submit}>Login</button>
        </form>
    )
}

export default SignIn
