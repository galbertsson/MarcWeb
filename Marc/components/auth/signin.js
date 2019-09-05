import React from 'react'

const SignIn = ({onChange, submit}) => {
    return (
        <div className={'login'}>
            <style jsx>{`
                .login{
                    /*width: 500px;
                    height: 200px;*/
                    width: 100vw;
                    height: 100vh;
                    position: fixed;
                    top: 0;
                    background-color: rgba(0,0,0,0.25);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .form{
                    width: 500px;
                    height: 250px;
                    background-color: white;
                    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                }
            `}</style>
            <form className={'form'}>
                <h1>Login</h1>
                <input type="email" name="email" onChange={onChange} />
                <input type="password" name="password" onChange={onChange} />
                <button onClick={submit}>Login</button>
            </form>
        </div>
    )
}

export default SignIn
