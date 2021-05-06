import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "@material-ui/core";

const DeleteGalaxy = (props) => {
    const [formState, setFormState] = useState({
        galaxyName: "",
        galaxyType: "",
        galaxyFact: "",
        galaxyUrl: ""
    });

    useEffect(() => {
        setFormState(props.galaxy);
        }, [props.galaxy]); 

    const handleDeleteSubmit = (e) => {
        e.preventDefault();
        props.submit(formState);
    };
    
    return (
        <Container className="form" align="center">
        <Row>
            <Col>
                <h1 className="form-heading">Delete Galaxy</h1>
                <form onSubmit={handleDeleteSubmit}>
                    <label className="labels">
                        Galaxy Name
                        <br></br>
                        <input className="input" name="galaxyName" value={formState.galaxyName}></input>
                    </label>
                    <br></br>
                    <Button variant="contained" color="secondary" className="buttons" type="submit">Delete Galaxy</Button>
                </form>
            </Col>
        </Row>
    </Container>
    )
};

export { DeleteGalaxy };