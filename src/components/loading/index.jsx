import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Loader = () => {
    return (
        <span>
            <FontAwesomeIcon icon={["fa", "sync"]} fixedWidth />
            Loading
    </span>
    );
};