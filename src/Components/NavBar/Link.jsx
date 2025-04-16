import React from 'react';

const Link = ({ route }) => {
    return (
        // <ul>

        // </ul>
        <li className='mr-10 bg-amber-200 px-2'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;