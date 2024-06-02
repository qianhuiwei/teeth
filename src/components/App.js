import Form from './Form';
import Questions from './Questions';
import Camera from './Camera';
import AllSet from './AllSet';
import { Routes, Route } from "react-router-dom";
import React from 'react';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Form />} />
                <Route path="/questions" element={<Questions />} />
                <Route path="/camera" element={<Camera />} />
                <Route path="/allset" element={<AllSet />} />
            </Routes>
            {/* <Routes>
                <Route
                    exact
                    path="/"
                    element={
                        <Form />
                    }
                />
                <Route
                    exact
                    path="/questions"
                    element={
                        <Questions />
                    }
                />
                <Route
                    exact
                    path="/camera"
                    element={
                        <Camera />
                    }
                />
                <Route
                    exact
                    path="/allset"
                    element={
                        <AllSet />
                    }
                />
            </Routes> */}
        </div>
    );
}

export default App;