import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Todo from '../components/Todo/Todo';

const HomePage = () => {
    return (
        <>
            <Header></Header>
            <Todo></Todo>
            <Footer></Footer>
        </>
    );
};

export default HomePage;