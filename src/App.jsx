import React, { useState } from 'react'

const App = () => {
    const [blueCubeColor, setBlueCubeColor] = useState('blue')
    const [redCubeColor, setRedCubeColor] = useState('red')

    const handleCubeClick = () => {
        setBlueCubeColor((prevColor) => (prevColor === 'blue' ? 'red' : 'blue'))
        setRedCubeColor((prevColor) => (prevColor === 'red' ? 'blue' : 'red'))
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            height: '100vh',
            alignItems: 'center'
        }}>
            <div
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: blueCubeColor,
                    display: 'inline-block',
                    marginRight: '20px',
                    cursor: 'pointer',
                }}
                onClick={handleCubeClick}
            ></div>
            <div
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: redCubeColor,
                    display: 'inline-block',
                    cursor: 'pointer',
                }}
                onClick={handleCubeClick}
            ></div>
        </div>
    )
}

export default App
