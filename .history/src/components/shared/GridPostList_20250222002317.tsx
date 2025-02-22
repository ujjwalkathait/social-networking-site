import { useUserContext } from "@/context/AuthContext"
import { Models } from "appwrite"
import { Link } from "react-router-dom"

type GridPostListProps = {
  posts: Models.Document[]
}

const GridPostList = ({ posts }: GridPostListProps) => {
  const { user } = useUserContext();
  return (
    <ul className="grid-container">
      {posts.map((post) =>(
        <li key={post.$id} className="relative min-w 80 h-80">
          <Link>
            <img src= {post.ima} alt="" />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default GridPostList