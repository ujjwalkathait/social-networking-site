
const Home = () => {
  const isPostLoading = true;
  return (
    <div className='flex flex-1'>
      <div className="home-container">
        <div className="home-posts">
          <h2 className='h3-bold md:h2-bold text-left w-full'>Home Feed</h2>
          {isPostLoading && }
        </div>
      </div>
    </div>
  )
}

export default Home