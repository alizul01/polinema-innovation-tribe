import React, {useEffect} from 'react';

function Home() {
    useEffect(() => {
        document.title = "Politribe | Home";
    }, []);
    return (
        <div>
            Ini Home
        </div>
    );
}

export default Home;