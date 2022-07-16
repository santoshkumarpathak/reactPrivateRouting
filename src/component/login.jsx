import React, { useState } from 'react'
import { Button, Row } from 'react-bootstrap-v5'
import { useNavigate } from 'react-router-dom';


import { makeStyles } from '@mui/styles'

const customeStyle = makeStyles({
    logincss: {
        border: 'solid 1px',
        margin: ' 6% 30% 0% 30%'
    },
    logintext: {
        marginTop: '5px',

        marginBottom: '15px'
    },
    email: {
        marginBottom: '15px',
    },
    password: {
        marginBottom: '15px',
    }
})

export const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    localStorage.setItem('Token', false)
    const login = () => {
        if (email === "tectum" && password === "12") {
            navigate('/home')
            localStorage.setItem('Token', true)

        } else if (email === "tectumAdmin" && password === "12") {
            navigate('dashboard')
            localStorage.setItem('Admin_Token', true)
        }

    }
    const styles = customeStyle();
    return (
        <div>


            <center >
                <div className={styles.logincss}>
                    <div className={styles.logintext} >Login</div>
                    <Row className={styles.email} >
                        <input placeholder='email'
                            onChange={(e) => setEmail(e.target.value)} />
                    </Row>
                    <Row className={styles.password}>
                        <input placeholder='password'
                            onChange={(e) => setPassword(e.target.value)} />
                    </Row>
                    <Row className={styles.password}>
                        <Button onClick={login}>Submit</Button>
                    </Row>
                </div>
            </center>
        </div>
    )
}
