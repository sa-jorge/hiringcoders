import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function Repos() {

    const [repositories, setRepositories] = useState([]);
    const navigate = useNavigate ();

    useEffect(() => { 
        let repositoriesName = localStorage.getItem('repositoriesName');
        if (repositoriesName !== null) {
            repositoriesName = JSON.parse(repositoriesName);
            setRepositories(repositoriesName);
        } else {
            navigate('/');
        }

    }, [navigate]);

    return (
        <div>
            <h1>Repositories</h1>
            <ul>
               {repositories.map(repository => {
                    return (
                        <li key={repository}>Repositório: {repository}</li>
                    )
                }) }
            </ul>
            <button type="button" onClick={() => {navigate('/'); localStorage.clear()}}> Voltar </button>
        </div>
        
    )
}

export default Repos;