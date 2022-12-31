import React, {useEffect} from 'react';
import Hero from "../parts/HomePage/Hero";

function Home() {
    useEffect(() => {
        document.title = "Politribe | Home";
    }, []);
    return (
        <div>
            <Hero />
            <div className={"border-slate-700 border mt-12 block w-full"}></div>
        </div>
    );
}

export default Home;