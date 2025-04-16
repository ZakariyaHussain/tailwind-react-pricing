

import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

const navigationData = [
    {
        id: 1,
        name: "Home",
        path: "https://www.example.com"
    },
    {
        id: 2,
        name: "About Us",
        path: "https://www.example.com/about"
    },
    {
        id: 3,
        name: "Services",
        path: "https://www.example.com/services"
    },
    {
        id: 4,
        name: "Blog",
        path: "https://www.example.com/blog"
    },
    {
        id: 5,
        name: "Contact",
        path: "https://www.example.com/contact"
    }
];

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const links = navigationData.map(route => <Link route={route} key={route.id}></Link>);
    return (
        <nav className='flex justify-between mx-10 mt-4'>
            {/* normal nav */}
            {/* <ul className='flex'>
                <li className='ml-10'>Home</li>
                <li className='ml-10'>About</li>
                <li className='ml-10'>Blog</li>
            </ul> */}

            {/* dynamic nav */}

            {/* method-1 */}
            {/* <ul className='flex'>
                {
                    navigationData.map(navi => <li key={navi.id} className='ml-10'>{navi.name}</li>)
                }
            </ul> */}

            {/* method-2 */}

            <span className='flex' onClick={() => setOpen(!open)}>
                {open ? <X></X> : <Menu className='md:hidden'></Menu>}
                <ul className={`md:hidden absolute duration-1000 ${open ? 'top-12' : '-top-30'}`}>
                    {
                        links
                    }
                </ul>
                <h3 className='ml-4'>My Navbar</h3>
            </span>
            <ul className='hidden md:flex'>
                {
                    links
                }
            </ul>

            <button>Login</button>

        </nav>
    );
};

export default NavBar;