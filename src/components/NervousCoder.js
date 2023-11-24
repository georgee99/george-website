import React, { useEffect, useState } from "react";
import Coder from "../images/nervouscoderedit.png";
import CoderCopy from "../images/copyOfNervousCoder.png";

export const NervousCoder = () => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const imageArray = [Coder, CoderCopy];
    const [index, setIndex] = useState(0);
    const [photo, setPhoto] = useState(imageArray[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [imageArray.length]);

    useEffect(() => {
        setPhoto(imageArray[index]);
    }, [index, imageArray]);

    return (
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
                className="nervous-coder object-cover object-center rounded"
                alt="hero"
                src={photo}
            />
        </div>
    )
}
