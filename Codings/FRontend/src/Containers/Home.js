import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className='Container home__wrapper'>
        <h1 className='header__main'>Simple Web Application Using Django React</h1>
        <Link class='btn btn-primary btn-lg' to='/login' role='button' className='Submit__button'>Login</Link>
    </div>
);

export default Home;