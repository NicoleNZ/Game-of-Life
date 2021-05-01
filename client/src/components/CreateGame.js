import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const CreateGame = (props) => {
    const [formState, setFormState] = useState({
        gameName: "",
        gameSpeed: ""
        
    });

    const handleFormChange = (e) => {
        const newState = { ...formState }; //newState will therefore equal whatever is written in the fields
        newState[e.target.name] = e.target.value; 
        setFormState(newState); //updates the formState in the memory
    };

    const handleCreateSubmit = (e) => {
        e.preventDefault();
        props.submit(
            formState.gameName,
            formState.gameSpeed
        );
    };

    return (
        <Container className="form" align="center">
            <Row>
                <Col>
                    <h1 className="form-heading">New Game</h1>
                    <form onSubmit={handleCreateSubmit}>
                        <label className="labels">
                            Game Name
                            <input name="gameName" value={formState.gameName} onChange={handleFormChange}></input>
                        </label>
                        <br></br>
                        <label className="labels">
                            Game Speed
                            <input name="gameSpeed" value={formState.gameSpeed} onChange={handleFormChange}></input>
                        </label>
                        <br></br>
                        <Button type="submit" style={{ background: "#ff007f" }}>Create Game</Button>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}

export { CreateGame };