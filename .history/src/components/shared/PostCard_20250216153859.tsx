import { Models } from "appwrite";
import { Link } from "react-router-dom";

type PostCardProps = {
    post: Models.Document;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="post-card">
        <div className="flex-between">
            <div className="flex items-center gap-3">
                <Link to={`/profile/${post.creater.$id}`}>
                    <img src={post?.creator?.imageUrl} alt="" />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default PostCard