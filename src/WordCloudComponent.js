import React, {useState, useEffect, useMemo} from "react";
import ReactWordcloud from "react-wordcloud";
import Logo from "./logo.svg"; // Make sure the path is correct

import COP23 from "./data/COP23.js";
import COP24 from "./data/COP24.js";
import COP25 from "./data/COP25.js";
import COP26 from "./data/COP26.js";
import COP27 from "./data/COP27.js";
import COP28 from "./data/COP28.js";

import "./App.css";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

function WordCloudComponent() {
    const [ wordData, setWordData ] = useState([]);
    const [ currentDataIndex, setCurrentDataIndex ] = useState(0);

    const dataSets = useMemo(() => [ COP28, COP27, COP26, COP25, COP24, COP23 ], []);

    const datasetNames = [
        "COP28 UAE",
        "COP27 Egypt",
        "COP26 Glasgow",
        "COP25 Madrid",
        "COP24 Katowice",
        "COP23 Bonn",
    ];

    useEffect(() => {
        // Set wordData based on the currentDataIndex
        setWordData(dataSets[currentDataIndex]);
    }, [ currentDataIndex, dataSets ]);

    const options = {
        colors: [ "#3496d3", "#4fa6d8", "#2e85c0", "#3496d380", "#4fa6d880", "#2e85c080" ],
        fontFamily: "inter, sans-serif",
        fontSizes: [ 30, 50 ],
        scale: "sqrt",
        rotations: 3,
        rotationAngles: [ -90, 0, 90 ],
        // ... other options
    };

    const handleNextData = () => {
        setCurrentDataIndex((prevIndex) => (prevIndex + 1) % dataSets.length);
    };

    return (
        <div className="body">
            <div className="header">
            <div className="TopSection">
                <h1 style={{marginBottom: "0.2em", textAlign: "left", display: "flex", alignItems: "center"}}>
                    Word Cloud <img src={Logo} alt="Logo" style={{width: "1em", marginLeft: "8px"}} />
                </h1>
                <p className="responsive-text">
                    How has the development of non-committal language evolved throughout COP history? Click through the
                    years of COP agreements to observe the frequency of language usage. You can also hover over each
                    word to view a specific word count.
                </p>

                <button className="button" onClick={handleNextData}>
                    Next Cloud: {datasetNames[currentDataIndex]}
                </button>
            </div>

            <div className="BottomSection">
                <div style={{ paddingTop:"2em", height: "70vh", width: "auto",}}>
                    <ReactWordcloud words={wordData} options={options} />
                    </div>
                    </div>
            </div>
        </div>
    );
}

export default WordCloudComponent;
