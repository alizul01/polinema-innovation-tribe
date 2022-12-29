import React, {useEffect} from 'react';

function Idea() {
    useEffect(() => {
        document.title = "Politribe | Idea";
    }, []);
    return (
        <div>
            Ini Idea
        </div>
    );
}

export default Idea;