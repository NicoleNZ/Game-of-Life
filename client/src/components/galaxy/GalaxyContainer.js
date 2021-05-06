import React, { useEffect, useState } from "react";
import { CreateGalaxy } from "./CreateGalaxy";
import { EditGalaxy } from "./EditGalaxy";
import { DeleteGalaxy } from "./DeleteGalaxy";
import { GalaxyList } from "./GalaxyList";

export const GalaxyContainer = () => {
    
    const [galaxyList, setGalaxyList] = useState([]); 
    const [galaxyEdit, setGalaxyEdit] = useState ({
        galaxyName: "",
        galaxyType: "",
        galaxyFact: ""
    }); 
    const [galaxyDelete, setGalaxyDelete] = useState ({
        galaxyName: "",
        galaxyType: "",
        galaxyFact: ""
    });

    const createSubmit = (
        galaxyName,
        galaxyType,
        galaxyFact) => {
            const newGalaxy = { 
                galaxyName: galaxyName,
                galaxyType: galaxyType,
                galaxyFact: galaxyFact
            };

        const newGalaxies = [...galaxyList];

        newGalaxies.push(newGalaxy); //this is pushing the newly created galaxy into the array of galaxy objects
        setGalaxyList(newGalaxies); //this 'updates' the galaxyList in the memory to contain the newly created galaxy
        
        fetch("http://localhost:4000/api/galaxy/newgalaxy", { //this is going to POST the newly created galaxy to the MongoDB database
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newGalaxy),
        })
        .then((response) => {
        console.log("MongoDB response: ", response);
        }); 
        
        fetch("http://localhost:4000/api/galaxy/all", { 
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
            })
            .then((response) => {
                console.log("MongoDB product list response: ", response);
                return response.json();
            })
            .then((galaxyData) => {
                console.log("Current galaxyData is: ", galaxyData);
                setGalaxyList(galaxyData.data); 
            });
    };


    useEffect(() => {
    fetch("http://localhost:4000/api/galaxy/all", { 
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    }
    })
    .then((response) => {
        console.log("MongoDB galaxy list response: ", response);
        return response.json();
    })
    .then((galaxyData) => {
        console.log("Current galaxyData is: ", galaxyData);
        setGalaxyList(galaxyData.data); 
        console.log("Typeof galaxyList", typeof galaxyList);
    });
    }, []);  
    
    const galaxyClick = (galaxyIndex) => {
        console.log("galaxyIndex: ", galaxyIndex);        
        const galaxy = galaxyList[galaxyIndex];
        console.log("galaxy: ", galaxy);
        setGalaxyEdit(galaxy);
        setGalaxyDelete(galaxy);
    }

    const editClick = (galaxy) => {
        console.log("editClick: ", galaxy);
        const foundGalaxy = galaxyList.findIndex((galaxyEl) => {
            return galaxyEl._id === galaxy._id
        });
            const allGalaxies = [...galaxyList];
            allGalaxies[foundGalaxy] = galaxy;
            console.log("galaxy: ", galaxy)
            console.log("galaxy._id: ", galaxy._id);
        fetch(`http://localhost:4000/api/galaxy/updategalaxy/${galaxy._id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(galaxy)
        })
        .then((response) => {
            console.log('Patch response:', response);
        });

        fetch("http://localhost:4000/api/galaxy/all", { 
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
            })
            .then((response) => {
                console.log("MongoDB product list response: ", response);
                return response.json();
            })
            .then((galaxyData) => {
                console.log("Current galaxyData is: ", galaxyData);
                setGalaxyList(galaxyData.data); 
            });    
    };

    const deleteClick = (galaxy) => {
        console.log("deleteClick: ", galaxy);
        const foundGalaxy = galaxyList.findIndex((galaxyEl) => {
            return galaxyEl._id === galaxy._id
        });
            const allGalaxies = [...galaxyList];
            allGalaxies[foundGalaxy] = galaxy;
            console.log("galaxy: ", galaxy)
            console.log("galaxy._id: ", galaxy._id);
        fetch(`http://localhost:4000/api/galaxy/deletegalaxy/${galaxy._id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => {
            console.log('Delete response:', response);
        });  
        
        fetch("http://localhost:4000/api/galaxy/all", { 
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
            })
            .then((response) => {
                console.log("MongoDB product list response: ", response);
                return response.json();
            })
            .then((galaxyData) => {
                console.log("Current galaxyData is: ", galaxyData);
                setGalaxyList(galaxyData.data); 
            });   
    };          

    return (
        <div className="column-container">
            <div className="galaxy-list">
            <h1 className="form-heading">My Favourite Galaxies</h1>
            <GalaxyList galaxies={galaxyList} handleClick={galaxyClick} />
            </div>
            <div className="galaxies-container">
                <CreateGalaxy submit={createSubmit}/>
                <EditGalaxy submit={editClick} galaxy={galaxyEdit} />
                <DeleteGalaxy submit={deleteClick} galaxy={galaxyDelete} />
            </div>
        </div>
    );
};

