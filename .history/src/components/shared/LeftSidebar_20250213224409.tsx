import { sidebarLinks } from "@/constants";
import { useUserContext } from "@/context/AuthContext";
import { useSignOutAccount } from "@/lib/react-query/queriesAndMutations"
import { INavLink } from "@/types";
import { useEffect,  } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom"

const LeftSidebar = () => {
    const { pathname } = useLocation();
    const { mutate : signOut, isSuccess} = useSignOutAccount();
    const navigate = useNavigate();
    const { user } = useUserContext();

    useEffect(() => {
        if(isSuccess) navigate(0);
    }, [isSuccess])
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

            <Link to={`/profile/${user.id}`} className="flex gap-3 items-center">
                <img 
                    src={user.imageUrl || "/assets/icons/profile-placeholer.svg"} 
                    alt="profile"
                    className="h-14 w-14 rounded-full" 
                />
                <div className="flex flex-col">
                    <p className="body-bold">
                        {user.name}
                    </p>
                    <p className="small-regular text-light-3" >
                        @{user.username}
                    </p>

                </div>

            </Link>

            <ul className="flex flex-col gap-6">
                {sidebarLinks.map((link: INavLink) =>{

                    const isActive = pathname === link.route;
                    return (
                        <li key={link.label} className={`leftsiderbar-link ${isActive && 'bg-primary-500'}`}>
                            <NavLink 
                                to={link.route}
                                className="flex gap-4 items-center p-4"
                            >
                                <img
                                    src={link.imgURL}
                                    alt={link.label}
                                    className="group-hover:invert-white"
                                />
                                {link.label}
                            </NavLink>
                        </li>
                    )
                })}

            </ul>
        </div>
    </nav>
  )
}

export default LeftSidebar