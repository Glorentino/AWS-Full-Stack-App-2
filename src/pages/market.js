import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import m3 from './images/m3.png';
import m4 from './images/m3.png';
const Market = () => {
    return (
        <Container fluid>
        <Row >
            Hello
          <Col xs={2}><img src={m3}/></Col>
          <Col xs={2}><img src={m4}/></Col>
        </Row>

      </Container>
    )
};
export default Market;