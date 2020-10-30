import React, { useContext } from 'react'
import Colors from '../../util/colors'
import { AuthContext } from '../../services/auth/AuthProvider';

//@ts-ignore
const SignIn = ({onChange, submit, onClose}) => {
    const auth = useContext(AuthContext);

    console.log(auth);

    return (
        <div className={'login'} onClick={onClose}>
            <style jsx>{`
                .login{
                    width: 100vw;
                    height: 100vh;
                    position: fixed;
                    top: 0;
                    left: 0;
                    background-color: rgba(0,0,0,0.25);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .form{
                    max-width: 400px;
                    height: 200px;
                    background-color: white;
                    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                    padding-left: 50px;
                    padding-right: 50px;
                    padding-bottom: 50px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    position: relative;
                }
                .button{
                    width: 60px;
                    height: 30px;
                    background-color: ${Colors.primaryColor};
                    color: ${Colors.textColorPrimary};
                    border: 0;
                    padding: 0;
                    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                    align-self: flex-end;
                }
                .textInput{
                    border: 0;
                    border-radius: 0;
                    border-bottom: 1px solid black;
                    height: 28px;
                    font-size: 20px;
                    width: 100%;

                }
                .textInput:{
                    border: 0;
                    border-radius: 0;
                    border-bottom: 1px solid black;
                    height: 28px;
                    font-size: 20px;
                    width: 100%;
                }
                .textInput:first-of-type{
                    margin-bottom: 10px;
                }
                .heading{
                    margin: 50px 0 0 0;
                    font-weight: 400
                }
            `}</style>
            <form className={'form'}>
                <h1 className={'heading'} >Login</h1>
                <span style={{position: 'absolute', top: '10px', right: '10px' }} onClick={() => onClose()}>X</span>
                <div className='input-container'>
                    <input type="email" className={'textInput'} name="email" onChange={(e) => onChange(e)} placeholder='Username' />
                    <input type="password" className={'textInput'} name="password" onChange={(e) => onChange(e)} placeholder='Password'/>
                </div>
                <button onClick={submit} className={'button'}>Login</button>
            </form>
        </div>
    )
}

export default SignIn
