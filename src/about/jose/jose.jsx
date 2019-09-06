import React from 'react';
import './jose.css';
import Card from 'react-bootstrap/Card'
import photo from './assets/images/profilePic.jpg'

function Jose() {
    return (
        <div className="aboutMatt">
            <div className="body">
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4" style={{ textAlign: "center" }}>
                        <Card className="image" style={{ width: '30rem' }}>
                            <Card.Img variant="top" src={photo} />
                            <Card.Body>
                                <Card.Title>Jose Quesada</Card.Title>
                                <Card.Text>
                                    <p>
                                        Double majoring in Computer Engineering and Computer Science at FAU.
                                        Music performance and production is a strong secondary passion of mine.
                                    </p>
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

export default Jose;