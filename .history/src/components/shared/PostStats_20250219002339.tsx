import { Models } from "appwrite";

type PostStatsProps = {
    post: Models.Document;
    userId: string;
}
const PostStats = ({ post, userId }: PostStatsProps) => {
  return (
    <div className="flex justify-center items-center z-20">
        <div className="flex gap-2 mr-5">

        </div>
    </div>
  )
}

export default PostStats