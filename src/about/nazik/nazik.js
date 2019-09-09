import React from 'react';
import './nazik.css';
import Card from 'react-bootstrap/Card'
import photo from './assets/img/nazik.jpg'


function Nazik() {
    return (
        <div>
            <div className="nazik-background">
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4" style={{ textAlign: "center" }}>
                        <Card className="image" style={{ width: '30rem' }}>
                            <Card.Img variant="top" src={photo} />
                            <Card.Body>
                                <Card.Title>Nazik Almazova</Card.Title>
                                <Card.Text>
                                    Junior year student majoring in Computer Science
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

export default Nazik;