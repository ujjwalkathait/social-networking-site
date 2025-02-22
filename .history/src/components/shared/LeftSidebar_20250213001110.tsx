import { Link } from "react-router-dom"

const LeftSidebar = () => {
  return (
    <nav className="leftsidebar">
        <div className="flex flex-col gap-11">
            <Link to="/" className="flex gap-3 items-center">
                <img 
                    src="/assets/images/logo.svg" 
                    alt='logo'
                    width={170}
                    height={36}
                    />
            </Link>
        </div>
    </nav>
  )
}

export default LeftSidebar