import Loader from "@/components/shared/Loader";
import { useGetPostById } from "@/lib/react-query/queriesAndMutations"
import { multiFormatDateString } from "@/lib/utils";
import { Link, useParams } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();
  const { data: post, isPending } = useGetPostById(id || '');

  return (
    <div className="post_details-container">
      {isPending ? <Loader /> : (
        <div className="post_details-card">
          <img src={post?.imageUrl} alt="post" className="post_details-img" />
          <div className="post_detials">
            {post && post.creator ? (
                <Link to={`/profile/${post.creator.$id}`}>
                    <img src={post.creator?.imageUrl || '/assets/icons/profile-placeholder.svg'} alt="creator" className="rounded-full w-12 lg:h-12" /> 
                </Link>
            ) : (
                <img 
                    src={'/assets/icons/profile-placeholder.svg'}
                    alt="creator"
                    className="rounded-full w-12 lg:h-12"
                />
            )}

            <div className="flex flex-col">
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
        </div>
        </div>
      )}
    </div>
  )
}

export default PostDetails