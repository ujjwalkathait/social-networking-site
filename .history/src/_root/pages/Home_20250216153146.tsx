import Loader from "@/components/shared/Loader";

const Home = () => {
  const { data: posts, isPending: isPostLoading } = usePosts();

  return (
    <div className='flex flex-1'>
      <div className="home-container">
        <div className="home-posts">
          <h2 className='h3-bold md:h2-bold text-left w-full'>Home Feed</h2>
          {isPostLoading && !posts ? (
            <Loader />
          ) : (
            <ul>
              
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home