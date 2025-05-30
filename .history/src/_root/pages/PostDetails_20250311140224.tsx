import Loader from "@/components/shared/Loader";
import PostStats from "@/components/shared/PostStats";
import { Button } from "@/components/ui/button";
import { useUserContext } from "@/context/AuthContext";
import { deletePost } from "@/lib/appwrite/api";
import { useGetPostById } from "@/lib/react-query/queriesAndMutations"
import { multiFormatDateString } from "@/lib/utils";
import { Link, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useUserContext();
  const { data: post, isPending } = useGetPostById(id || '');

  const handleDeletePost = () => {
    deletePost(id, post?.imageId);
    navigate(-1);
  }

  return (
    <div className="post_details-container">
      <div className="hidden md:flex max-w-5xl w-full">
        <Button
          onClick={() => navigate(-1)}
          variant="ghost"
          className="shad-button_ghost">
          <img
            src={"/assets/icons/back.svg"}
            alt="back"
            width={24}
            height={24}
          />
          <p className="small-medium lg:base-medium">Back</p>
        </Button>
      </div>
      {isPending ? <Loader /> : (
        <div className="post_details-card">
          <img src={post?.imageUrl} alt="post" className="post_details-img" />
          <div className="post_details-info">
            <div className="flex-between w-full">
              <Link to={`/profile/${post?.creator.$id}`} className="flex items-center gap-3">
                  <img src={post?.creator?.imageUrl || '/assets/icons/profile-placeholder.svg'} alt="creator" className="rounded-full w-8 h-8 lg:w-12 lg:h-12" /> 

              <div className="flex gap-1 flex-col">
                  <p className="base-medium lg:body-bold text-light-1">
                      {post?.creator.name}
                  </p>
                  <div className="flex-center gap-2 text-light-3">
                      <p className="subtle-semibold lg:small-regular">
                          {multiFormatDateString(post?.$createdAt)}
                      </p>
                      -
                      <p className="subtle-semibold lg:small-regular">
                        {post?.location}
                      </p>
                  </div>
              </div>
              </Link>

              <div className="flex-center">
                <Link to={`/update-post/${post?.$id}`} className={`${user.id !== post?.creator.$id && 'hidden' } `}>
                  <img src="/assets/icons/edit.svg" width={24} height={24} alt="edit" />
                </Link>

                <Button
                  onClick={handleDeletePost}
                  variant="ghost"
                  className={`ghost_details-delete_btn ${user.id !== post?.creator.$id && 'hidden'}`}
                >
                  <img src="/assets/icons/delete.svg" width={24} height={24} alt="delete" />

                </Button>
              </div>
            </div>

            <hr className="border w-full border-dark-4/100"/>
            <div className="flex flex-col flex-1 w-full small-medium lg:base-regular">
              <p>{post?.caption}</p>
              <ul className="flex gap-3 mt-2">
                  {post?.tags.map((tag: string) => (
                      <li key={tag} className="text-light-3">
                          #{tag}
                      </li>
                  ))}
              </ul>
            </div>
            <div className="w-full">
                <PostStats post={post} userId={user.id} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PostDetails