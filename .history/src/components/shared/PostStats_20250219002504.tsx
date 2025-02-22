import { Models } from "appwrite";
import { PackagePlus } from "lucide-react";

type PostStatsProps = {
    post: Models.Document;
    userId: string;
}
const PostStats = ({ post, userId }: PostStatsProps) => {
  return (
    <div className="flex justify-center items-center z-20">
        <div className="flex gap-2 mr-5">
            <img src="/assets/icons/like.svg" alt="like" width={20} height={20} onClick={() => {}} className="cursor-pointer"/>
            <PackagePlu></p>
        </div>
    </div>
  )
}

export default PostStats