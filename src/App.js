import React from 'react';
import './App.css';
import SubStringGenerator from './components/SubStringGenerator';
import { ThemeProvider, theme } from '@chakra-ui/core';

function App() {
    return (
        <ThemeProvider theme={theme} className="themeContainer">
            <div className="App">
                <SubStringGenerator />
            </div>
        </ThemeProvider>
    );
}

export default App;
