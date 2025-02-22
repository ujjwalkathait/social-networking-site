import { useUserContext } from "@/context/AuthContext";
import { useDeleteSavedPost, useLikePost, useSavePost } from "@/lib/react-query/queriesAndMutations";
import { checkIsLiked } from "@/lib/utils";
import { Models } from "appwrite";
import { useState, useEffect } from "react";

type PostStatsProps = {
    post: Models.Document;
    userId: string;
}
const PostStats = ({ post, userId }: PostStatsProps) => {
    const likesList = post.likes.map((user: Models.Document) => user.$id);

    const {likes, setLikes} = useState(likesList);
    const {isSaved, setIsSaved} = useState(false);

    const { mutate: likePost } = useLikePost();
    const { mutate: savePost } = useSavePost();
    const { mutate: deleteSavedPost } = useDeleteSavedPost();

    const { data: currentUser} = useUserContext();

    const handleLikePost = () => {}

    const handleSavePost = () => {}


  return (
    <div className="flex justify-between items-center z-20">
        <div className="flex gap-2 mr-5">
            <img src={`${checkIsLiked(likes,userId) ? "/assets/icons/like.svg" : "/assets/icons/like.svg"}`} alt="like" width={20} height={20} onClick={handleLikePost} className="cursor-pointer" />
            <p className="small-medium lg:base-medium">{likes.length}</p>
        </div>

        <div className="flex gap-2">
            <img src={`"/assets/icons/save.svg"`} alt="save" width={20} height={20} onClick={() => {}} className="cursor-pointer"/>
        </div>
    </div>
  )
}

export default PostStats