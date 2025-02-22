import { Models } from "appwrite";

type PostCardProps = {
    post: Models.Document;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="post-card">
        <div className="flex-between">
            <div>
                
            </div>
        </div>
    </div>
  )
}

export default PostCard