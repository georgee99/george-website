import React from 'react';
import PacmanLoader from "react-spinners/PacmanLoader";

const Loading = ({ loading }) => {
    return (
        <div align='center' className='pacman-loader'>
            <PacmanLoader 
                color="rgb(0, 153, 255)"
                size={50}
                loading={loading}
            />
        </div>
    )
}

export default Loading;