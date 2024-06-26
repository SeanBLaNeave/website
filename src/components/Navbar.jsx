import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import {styles} from '../style';
import {navLinks} from '../constants';
import {logo, menu, close} from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-black`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" className='flex items-cneter gap-2' onClick={() => {setActive(""); window.scrollTo(0, 0);}}>
          <p className="text-white text-[18px] font-bold cursor-pointer flex">Sean LaNeave&nbsp;
            <span className="sm:block hidden">| Portfolio</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((Link) => (
            <li key={Link.id} className={`${active === Link.title ? "text-secondary" : "text-primary"} hover:text-secondary text-[18px] font-medium cursor-pointer`} onClick={() => setActive(Link.title)}>
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt='menu' className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={() => setToggle(!toggle)} />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-14 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end itmes-start gap-4'>
              <li>
                {navLinks.map((Link) => (
                  <div key={Link.id} className={`${active === Link.title ? "text-secondary" : "text-primary"} hover:text-secondary text-[16px] font-medium cursor-pointer`} onClick={() => {setToggle(!toggle); setActive(Link.title)}}>
                    <a href={`#${Link.id}`}>{Link.title}</a>
                  </div>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar