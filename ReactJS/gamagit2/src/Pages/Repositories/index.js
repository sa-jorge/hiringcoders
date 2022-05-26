import React, {useEffect, useState} from "react";

function Repos() {

    const [repositories, setRepositories] = useState([]);

    useEffect(() => { 
        let repositoriesName = localStorage.getItem('repositoriesName');
        repositoriesName = JSON.parse(repositoriesName);
        setRepositories(repositoriesName);
        localStorage.clear();
    }, []);

    return (
        <div>
            <h1>Repositories</h1>
            <ul>
               {repositories.map(repository => {
                    return (
                        <li>Repositório: {repository}</li>
                    )
                }) }
            </ul>
        </div>
        
    )
}

export default Repos;