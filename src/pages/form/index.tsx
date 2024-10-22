import * as C from './styles'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { api } from '../../lib/axios'

const Form = () => {
  const onSubmit = (values: any) => {
    console.log(values)
    api
      .post('users/', {
        username: values.username,
        fullName: values.fullName,
        email: values.email,
        password: values.password
      })
      .then(function (response) {
        console.log(response.data)
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
        fullName: '',
        username: '',
        email: '',
        password: ''
      },
      validationSchema: Yup.object({
        fullName: Yup.string()
          .min(5, 'O nome precisa ter pelo menos 5 caracteres')
          .required('O campo é obrigatório'),
        username: Yup.string()
          .min(5, 'O nome precisa ter pelo menos 5 caracteres')
          .required('O campo é obrigatório'),
        email: Yup.string()
          .email('E-mail inválido')
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
            <h1>Cadastre-se</h1>
          </div>
          <div id="login_button">
            <C.Button>
              <a href="/login">Entrar</a>
            </C.Button>
          </div>
        </C.Header>
        <C.inputGrup>
          <C.inputBox>
            <label htmlFor="fullName:">Nome completo:</label>
            <input
              value={values.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              name="fullName"
              placeholder="digite seu nome completo"
              required
              className={
                errors.fullName && touched.fullName ? 'input-error' : ''
              }
            />
            {errors.fullName && touched.fullName && (
              <p className="error">{errors.fullName}</p>
            )}
          </C.inputBox>
        </C.inputGrup>

        <C.inputGrup>
          <C.inputBox>
            <label htmlFor="username">Nome do usuario:</label>
            <input
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              name="username"
              placeholder="digite o nome do usuario"
              required
              className={
                errors.username && touched.username ? 'input-error' : ''
              }
            />
            {errors.username && touched.username && (
              <p className="error">{errors.username}</p>
            )}
          </C.inputBox>
        </C.inputGrup>

        <C.inputGrup>
          <C.inputBox>
            <label htmlFor="email">Email:</label>
            <input
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              name="email"
              placeholder="Digite seu email"
              className={errors.email && touched.email ? 'input-error' : ''}
              required
            />
            {errors.email && touched.email && (
              <p className="error">{errors.email}</p>
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

export default Form
