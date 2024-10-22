import * as C from './styles'
import { User } from 'lucide-react'

type PostProps = {
  author_name: string
  body: string
}

const PostFeed = ({ author_name, body }: PostProps) => {
  return (
    <C.Feed>
      <C.Flex id="flex">
        <div id="icon">
          <User color="#6c63ff" size={30} />
          <p id="title">{author_name}</p>
        </div>
        <p>{body}</p>
      </C.Flex>
    </C.Feed>
  )
}

export default PostFeed
