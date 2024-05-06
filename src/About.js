import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const About  = () => {
  return (
    <div>
      <div className="about-section">
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>Resize the browser window to see that this page is responsive by the way.</p>
      </div>
      
      <h2 style={{ textAlign: 'center' }}>Our Team</h2>

      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Img variant="top" src="/w3images/team1.jpg" alt="Jane" />
              <Card.Body>
                <Card.Title>Jane Doe</Card.Title>
                <Card.Text>
                  CEO & Founder<br />
                  Some text that describes me lorem ipsum ipsum lorem.<br />
                  jane@example.com
                </Card.Text>
                <Button variant="primary">Contact</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img variant="top" src="/w3images/team2.jpg" alt="Mike" />
              <Card.Body>
                <Card.Title>Mike Ross</Card.Title>
                <Card.Text>
                  Art Director<br />
                  Some text that describes me lorem ipsum ipsum lorem.<br />
                  mike@example.com
                </Card.Text>
                <Button variant="primary">Contact</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img variant="top" src="/w3images/team3.jpg" alt="John" />
              <Card.Body>
                <Card.Title>John Doe</Card.Title>
                <Card.Text>
                  Designer<br />
                  Some text that describes me lorem ipsum ipsum lorem.<br />
                  john@example.com
                </Card.Text>
                <Button variant="primary">Contact</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
