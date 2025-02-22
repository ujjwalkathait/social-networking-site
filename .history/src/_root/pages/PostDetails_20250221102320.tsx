import { useGetPostById } from "@/lib/react-query/queriesAndMutations"

const PostDetails = () => {
  const { data: post, isPending } = useGetPostById

  return (
    <div>PostDetails</div>
  )
}

export default PostDetails