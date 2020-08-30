import React, { useEffect, useState } from "react";
import { GAMES_URL } from "../../../constants/api";
import { useParams } from "react-router-dom";
import NoResultMsg from '../resultMsg/NoResultMsg';

function SimilarGames() {
    const [suggestion, setSuggestion] = useState([]);

    let {id} = useParams();

    const suggestionURL = GAMES_URL + '/' + id + '/suggested';

    useEffect(() => {
        fetch(suggestionURL)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setSuggestion(json.results);
            })
            .catch((error) => console.log(error));
    }, [suggestionURL]);

    return(
        <ul>
            {suggestion.length === 0 && <NoResultMsg>This is a unique one, no suggestions.</NoResultMsg>}
            {suggestion.map((suggested) => {
                return(
                    <li key={suggested.id}>{suggested.name}</li>
                )
            })}
        </ul>
    )
}

export default SimilarGames;