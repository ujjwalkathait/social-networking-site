import { useGetPostById } from "@/lib/react-query/queriesAndMutations"
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();
  const { data: post, isPending } = useGetPostById(id || '');

  return (
    <div>PostDetails</div>
  )
}

export default PostDetails