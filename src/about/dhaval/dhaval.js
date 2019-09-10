import React from 'react';
import './dhaval.css';
import Card from 'react-bootstrap/Card';
import photo from './assets/images/dhaval.jpg';

function Dhaval() {
    return(
        <div className="aboutDhaval">
            <div className="dhaval-background">
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4" style={{ textAlign: "center" }}>
                        <Card className="image" style={{ width: '30rem' }}>
                            <Card.Img variant="top" src={photo} />
                                <Card.Body>
                                <Card.Title>Dhaval Shirvi</Card.Title>
                                <Card.Text>
                                    International student majoring in Computer Science
                                </Card.Text>
                                 </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
        </div>
    );
}

export default Dhaval;
