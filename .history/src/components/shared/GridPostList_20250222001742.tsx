import { Models } from "appwrite"

type GridPostListProps = {
  posts: Models.Document[]
}

const GridPostList = ({ posts }: GridPostListProps) => {
  return (
    <div>GridPostList</div>
  )
}

export default GridPostList