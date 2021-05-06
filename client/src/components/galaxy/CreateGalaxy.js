import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "@material-ui/core";


const CreateGalaxy = (props) => {
    const [formState, setFormState] = useState({
        galaxyName: "",
        galaxyType: "",
        galaxyFact: "",
        galaxyUrl: ""
    });

    const handleFormChange = (e) => {
        const newState = { ...formState }; //newState will therefore equal whatever is written in the fields
        newState[e.target.name] = e.target.value; 
        setFormState(newState); //updates the formState in the memory
    };

    const handleCreateSubmit = (e) => {
        e.preventDefault();
        props.submit(
            formState.galaxyName,
            formState.galaxyType,
            formState.galaxyFact,
            formState.galaxyUrl
        );
    };

    return (
        <Container className="form" align="center">
            <Row>
                <Col>
                    <h1 className="form-heading">New Galaxy</h1>
                    <form onSubmit={handleCreateSubmit}>
                        <label className="labels">
                            Galaxy Name
                        <br></br>
                            <input className="input" name="galaxyName" value={formState.galaxyName} onChange={handleFormChange}></input>
                        </label>
                        <br></br>
                        <label className="labels">
                            Galaxy Type
                        <br></br>
                            <input className="input" name="galaxyType" value={formState.galaxyType} onChange={handleFormChange}></input>
                        </label>
                        <br></br>
                        <label className="labels">
                            Favourite Galaxy Fact
                        <br></br>
                        <input className="input" name="galaxyFact" value={formState.galaxyFact} onChange={handleFormChange}></input>
                        </label>
                        <br></br>
                        <label className="labels">
                            Galaxy Url
                        <br></br>
                        <input className="input" name="galaxyUrl" value={formState.galaxyUrl} onChange={handleFormChange}></input>
                        </label>
                        <br></br>
                        <Button variant="contained" color="secondary" className="buttons" type="submit">Create Galaxy</Button>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}

export { CreateGalaxy };