import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
import { login } from '../../redux/Authentication/Authentication.actions'
import Button from '../../shared/Button'
import Form from '../../shared/Form'
import Input from '../../shared/Input'

const LoginForm = () => {

    const dispatch = useDispatch()

    const [form, setForm] = useState({
        user: '',
        pass: ''
    })

    const history = useHistory()

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const {value, name } = event.target

        setForm({
            ...form,
            [name]: value
        })
    }
    const handleLogin = async () => {
        
        try {
            await dispatch(login(form))
            history.push('/')

        } catch (error) {
            Swal.fire('Error', 
            error.response?.data?.message ||
            error.message, 'error')
        }
    }

    return <Form title="Login AlgaStock" onSubmit={handleLogin}>
        <Input
            label="User"
            name="user"
            value={form.user}
            onChange={handleInputChange}
            placeholder="E.g.: your_user_name321"    
        />

        <Input
            label="Password"
            name="pass"
            value={form.pass}
            onChange={handleInputChange}
            type='password'    
        />

        <Button>
            Login
        </Button>
    </Form>

}

export default LoginForm