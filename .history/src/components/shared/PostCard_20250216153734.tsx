import { Models } from "appwrite";

type PostCardProps = {
    post: Models.Document;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="post-card">
        <div className="flex-between">
            <div className="flex items-center gap">

            </div>
        </div>
    </div>
  )
}

export default PostCard