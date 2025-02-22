import { bottombarLinks } from '@/constants';
import { Link, useLocation } from 'react-router-dom';

const Bottombar = () => {
  const { pathname } = useLocation();
  return (
    <section className='bottom-bar'>
      {bottombarLinks.map((link) =>{
        const isActive = pathname === link.route;
        return (
            <li key={link.label} className={`leftsidebar-link group ${isActive && 'bg-primary-500'}`}>
                <NavLink 
                    to={link.route}
                    className="flex gap-4 items-center p-4"
                >
                    <img
                        src={link.imgURL}
                        alt={link.label}
                        className={`group-hover:invert-white ${isActive && 'invert-white'}`}
                    />
                    {link.label}
                </NavLink>
            </li>
        )
    })}
    </section>
  )
}

export default Bottombar