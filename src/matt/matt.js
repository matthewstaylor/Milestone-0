import React from 'react';
import './matt.css';
import Card from 'react-bootstrap/Card'
import photo from './assets/images/Matthew201909.jpg'

function Matt() {
    return (
        <div className="aboutMatt">
            <div className="body">
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4" style={{ textAlign: "center" }}>
                        <Card className="image" style={{ width: '30rem' }}>
                            <Card.Img variant="top" src={photo} />
                            <Card.Body>
                                <Card.Title>Matthew Taylor</Card.Title>
                                <Card.Text>
                                    Rising junior Computer Science student at Florida Atlantic University.
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

export default Matt;