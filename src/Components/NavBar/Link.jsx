import React from 'react';

const Link = ({route}) => {
    const{path,name}=route
    return (
        <li className='px-4 lg:mr-10 hover:bg-amber-400'>
            <a href={path}>{name}</a>
        </li>
    );
};

export default Link;