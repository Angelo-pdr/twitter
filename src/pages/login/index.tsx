import * as C from './styles'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { api } from '../../lib/axios'
import { useNavigate, Navigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const onSubmit = (values: any) => {
    api
      .post('login', {
        username: values.username,
        password: values.password
      })
      .then(function (response) {
        localStorage.setItem('logado', JSON.stringify(response.data))
        navigate('/')
      })
      .catch(function (error) {
        if (error.response) {
          console.error('Erro do servidor:', error.response.data)
        } else if (error.request) {
          console.error('Nenhuma resposta recebida:', error.request)
        } else {
          console.error('Erro na configuração da requisição:', error.message)
        }
      })
  }

  const { values, errors, touched, handleBlur, handleSubmit, handleChange } =
    useFormik({
      initialValues: {
        username: '',
        password: ''
      },
      validationSchema: Yup.object({
        username: Yup.string()
          .min(5, 'O nome precisa ter pelo menos 5 caracteres')
          .required('O campo é obrigatório'),
        password: Yup.string()
          .min(5, 'A senha precisa ter pelo menos 5 caracteres')
          .required('O campo é obrigatório')
      }),
      onSubmit
    })
  return (
    <C.Container>
      <C.Form onSubmit={handleSubmit}>
        <C.Header>
          <div id="title">
            <h1>Login</h1>
          </div>
          <div id="login_button">
            <C.Button>
              <a href="/form">Cadastre-se</a>
            </C.Button>
          </div>
        </C.Header>
        <C.inputGrup>
          <C.inputBox>
            <label htmlFor="email">Username:</label>
            <input
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              name="username"
              placeholder="Digite seu username"
              className={
                errors.username && touched.username ? 'input-error' : ''
              }
              required
            />
            {errors.username && touched.username && (
              <p className="error">{errors.username}</p>
            )}
          </C.inputBox>
        </C.inputGrup>

        <C.inputGrup>
          <C.inputBox>
            <label htmlFor="password">Senha:</label>
            <input
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              type="password"
              name="password"
              placeholder="Digite sua senha"
              className={
                errors.password && touched.password ? 'input-error' : ''
              }
              required
            />
            {errors.password && touched.password && (
              <p className="error">{errors.password}</p>
            )}
          </C.inputBox>
        </C.inputGrup>
        <C.Button type="submit">Continuar</C.Button>
      </C.Form>
    </C.Container>
  )
}

export default Login
