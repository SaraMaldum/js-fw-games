import React from 'react';
import Heading from '../layout/heading/Heading';
import GamesOverview from '../games/GamesOverview';

function Home() {
    return (
        <>
            <Heading title="Games" />
            <GamesOverview />
        </>
    )
}

export default Home;
