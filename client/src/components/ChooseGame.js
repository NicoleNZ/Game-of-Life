import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";

export const ChooseGame = () => {

    const [game, setGames] = useState([]);
    const [editGame, setEditGame] = useState({
        gameName: "",
        gameSpeed: ""
    });
    const [deleteGame, setDeleteGame] = useState({
        gameName: "",
        gameSpeed: ""
    });

    const handleGameSubmit = (
        gameName,
        gameSpeed) => {
            const newGame = {
                gameName: gameName,
                gameSpeed: gameSpeed
            };
    
        const newGames = [... game];
        newGames.push(newGame);
        setGames(newGames);
        
        fetch("http://localhost:4000/api/life/newgame", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newGame),
        })
        .then((response) => {
        console.log("MongoDB response: ", response);
        });  
    };

    return (
        <div>
            <Container>
                <Col>
                    <Row>
                        <form>

                        </form>
                    </Row>
                </Col>
            </Container>
            

        </div>
    )
}