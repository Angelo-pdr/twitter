import * as C from './styles'
import { User, Hash, House, Bell, Mail, LogOut } from 'lucide-react'
import { api } from '../../lib/axios'
import { useEffect, useState } from 'react'
import PostFeed from '../../components/PostFeed'

const Home = () => {
  const user = JSON.parse(localStorage.getItem('logado') as string)
  const [post, setPost] = useState<any[]>([])
  const [body, setBody] = useState('')

  const insertPost = () => {
    const date = new Date()
    if (body != '') {
      console.log(body)
      setBody('')
      api
        .post('post/', {
          body: body,
          author: user.id,
          created_at: date
        })
        .then(function (response) {
          console.log(response.data)
          location.reload()
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
  }
  useEffect(() => {
    api
      .get('post/')
      .then((response) => {
        setPost(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const logout = () => {
    localStorage.removeItem('logado')
    location.reload()
  }

  return (
    <C.Container>
      <C.Flex>
        <C.Header>
          <C.Ul>
            <li>
              <User color="white" />
              <a href="#">{user.username}</a>
            </li>
            <li>
              <House color="white" />
              <a href="#">Home</a>
            </li>
            <li>
              <Hash color="white" />
              <a href="#">Explorar</a>
            </li>
            <li>
              <Bell color="white" />
              <a href="#">Notificações</a>
            </li>
            <li>
              <Mail color="white" />
              <a href="#">Mensagens</a>
            </li>
            <li>
              <LogOut color="white" />
              <a href="#" onClick={logout}>
                Sair
              </a>
            </li>
          </C.Ul>
        </C.Header>
        <C.ContainerFeed>
          <C.Feed>
            <div>
              <div id="icon">
                <User color="#6c63ff" size={30} />
              </div>
              <C.Input
                type="text"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="No que você está pensado ?"
              />
            </div>
            <C.Button onClick={insertPost}>Publicar</C.Button>
          </C.Feed>
          {post.map((item) => (
            <div id="feedList" key={item.body}>
              <PostFeed author_name={item.author_name} body={item.body} />
            </div>
          ))}
        </C.ContainerFeed>
      </C.Flex>
    </C.Container>
  )
}

export default Home
