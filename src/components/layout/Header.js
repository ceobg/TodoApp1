import React from 'react';

function Header() {
    return (
    
        <header style={headerStyle}>
            <br />
            <h1>G L O R Y</h1>
            <h4>a To Do List app.</h4>
        </header>
    )
}

const headerStyle = {
    background: 'black',
    textAlign: 'center',
    padding: '3px',
    borderRadius: '35px',
}
export default Header;