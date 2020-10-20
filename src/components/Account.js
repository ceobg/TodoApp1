import React from 'react';
import { Row, Col , ModalFooter, Container, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faPhone, faBook, faPersonBooth } from '@fortawesome/free-solid-svg-icons';

function Account () { //extends React.Component {
        return ( <div>
            <React.Fragment>

                <br /> <br />

                <Container>
      <Row>
        <Col md="12">
          <Card>
            <Card.Body>
              <Card.Header className="form-header warm-flame-gradient rounded" style={{ backgroundImage: "url('https://images.pexels.com/photos/57401/flowers-nature-macro-petals-57401.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')",}}>
                <h2 className="my-3">
                <button type="button" class="btn btn-md btn-block" disabled style={{ backgroundColor: '#170929',}}>      <div> <FontAwesomeIcon className="faicons" icon={faBook} style={{ color: '#7d24b8',}} /> </div> <h1>Notifications</h1>  </button>
                <p>Do not disturb</p><p>Push</p> 
                </h2>
              </Card.Header>
              <Card.Header className="form-header warm-flame-gradient rounded" style={{ backgroundImage: "url('https://images.pexels.com/photos/57401/flowers-nature-macro-petals-57401.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')",}}>
                <h2 className="my-3">
                <button type="button" class="btn btn-md btn-block" disabled style={{ backgroundColor: '#170929',}}>      <div> <FontAwesomeIcon className="faicons" icon={faPhone} style={{ color: '#7d24b8',}} /> </div> <h1>Support</h1>  </button>
                <p>iOS guide</p>  <p>Contact support</p> 
                </h2>
              </Card.Header>
              <Card.Header className="form-header warm-flame-gradient rounded" style={{ backgroundImage: "url('https://images.pexels.com/photos/57401/flowers-nature-macro-petals-57401.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')",}}>
                <h2 className="my-3">
                <button type="button" class="btn btn-md btn-block" disabled style={{ backgroundColor: '#170929',}}>      <div> <FontAwesomeIcon className="faicons" icon={faCloud} style={{ color: '#7d24b8',}} /> </div> <h1>More</h1>  </button>
                <p>Rate the app</p>  <p>Privacy policy</p> <p>Terms of Service</p> <p>Version</p> 
                </h2>
              </Card.Header>
              <Card.Header className="form-header warm-flame-gradient rounded" style={{ backgroundImage: "url('https://images.pexels.com/photos/57401/flowers-nature-macro-petals-57401.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')",}}>
                <h2 className="my-3">
                <button type="button" class="btn btn-md btn-block" disabled style={{ backgroundColor: '#170929',}}>      <div> <FontAwesomeIcon className="faicons" icon={faPersonBooth} style={{ color: '#7d24b8',}} /> </div> <h1>Organizations</h1>  </button>
                <p>My Company</p> 
                </h2>
              </Card.Header>
              <ModalFooter>
                <div className="font-weight-light">
                  <p>Check out our other pages.</p>
                </div>
              </ModalFooter>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

    </React.Fragment>
                    </div>
 )
}

export default Account;