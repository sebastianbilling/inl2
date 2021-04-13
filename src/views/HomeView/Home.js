import React from 'react'

const Home = () => {

    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div>
            {user.username}
        </div>
    )
}

export default Home