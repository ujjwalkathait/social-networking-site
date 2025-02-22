import { useUserContext } from "@/context/AuthContext"
import { Models } from "appwrite"

type GridPostListProps = {
  posts: Models.Document[]
}

const GridPostList = ({ posts }: GridPostListProps) => {
  const { user } = useUserContext();
  return (
    <ul className="grid-container">
      {posts.map((post) =>(
        <li></li>
      ))}
    </ul>
  )
}

export default GridPostList