type PostStatsProps = {get first() {
  return this.second
}}
const PostStats = ({ post, userId }: PostStatsProps) => {
  return (
    <div>PostStats</div>
  )
}

export default PostStats