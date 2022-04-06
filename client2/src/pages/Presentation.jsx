import React from 'react'

const root = {
    position: 'absolute',
    background: "linear-gradient(45deg, #5555ff 15%, #aaaaaa 90%)",
    minWidth: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    top:0
}

const Presentation = () => {

    return (
        <h1 style={root}>MySymbaloo</h1>
    )
}

export default Presentation