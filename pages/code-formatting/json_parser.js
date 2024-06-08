import React, { useState } from 'react';
import JsonView from 'react18-json-view';
import 'react18-json-view/src/style.css'
import 'react18-json-view/src/dark.css'
const JsonParserPage = () => {
    const [jsonInput, setJsonInput] = useState('');

    let jsonOutput = {};
    try {
        jsonOutput = JSON.parse(jsonInput);
    } catch (error) {
        jsonOutput = { error: 'Invalid JSON' };
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Input</h2>
                    <textarea
                        className="form-control"
                        value={jsonInput}
                        onChange={(e) => setJsonInput(e.target.value)}
                        rows={15}
                    />
                </div>
                <div className="col">
                    <h2>View</h2>
                    <JsonView
                        editable
                        enableClipboard
                        src={jsonOutput}
                        theme='default'
                        collapseObjectsAfterLength={3}
                        collapseStringsAfterLength={17}
                        collapsed={2}
                        displaySize={"expanded"}

                    />
                </div>
            </div>
        </div>
    );
};

export default JsonParserPage;