import Loader from "@/components/shared/Loader";
import { useGetPostById } from "@/lib/react-query/queriesAndMutations"
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();
  const { data: post, isPending } = useGetPostById(id || '');

  return (
    <div className="post_details-container">
      {isPending ? <Loader /> : (
        <div clas>

        </div>
      )}
    </div>
  )
}

export default PostDetails