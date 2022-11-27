import React from 'react';
import {Link} from 'react-router-dom';

export default function NotFound () {
    return (
        <div>
            <h1>404 Error</h1>        
            <button>
                <Link to = "/">Back</Link>           
            </button>
        </div>
    );
};