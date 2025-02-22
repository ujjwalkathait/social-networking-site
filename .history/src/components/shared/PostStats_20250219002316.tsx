import { Models } from "appwrite";

type PostStatsProps = {
    post: Models.Document;
    userId: string;
}
const PostStats = ({ post, userId }: PostStatsProps) => {
  return (
    <div className="flex justify-center items-center gap-5">
        
    </div>
  )
}

export default PostStats