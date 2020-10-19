import React from 'react';
import Header from '../../header/Header';
import './PageLoginStyle.css';
import { admins } from '../../static/static';

const PageLogin = () => {
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState(false);

    const loginChange = e => {
        setLogin(e.target.value);
    };
    const passwordChange = e => {
        setPassword(e.target.value);
    };
    const find = () => {
        if(admins.find(admin => admin.login === login)) {
            let currentAdmin = admins.find(admin => admin.login === login);
            if(currentAdmin.password === password) {
                fetch('https://jsonplaceholder.typicode.com/todos/1',
                ).then( response => {
                    if(response.ok) {
                        localStorage.setItem('idUser', currentAdmin.id);
                        setError(false);
                        window.location.href='/protected-news';   
                    }
                } )
            } else {
                setError(true);
            }
        } else {
            setError(true);
        }
    };

    React.useEffect( () => {
        error ? document.querySelector('.error-log-pas').style = 'display: block;' : document.querySelector('.error-log-pas').style = 'display: none;';
    } )
    return (
        <>
            <Header />
            <main className='login-wrapper'>
                <form>
                    <input type='text' placeholder='Enter Your Login' onChange={loginChange} />
                    <br />
                    <input type='password'  placeholder='Enter Your Password' onChange={passwordChange} />
                    <br />
                    <span className='error-log-pas'>Error login or password</span>
                    <br />
                    <input type='button' value='LogIn' onClick={find} />
                </form>
            </main>
        </>
    )
}

export default PageLogin;