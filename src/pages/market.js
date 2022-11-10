import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import m3 from './images/m3.png';
import m4 from './images/m4.png';
import Figure from 'react-bootstrap/Figure';
const Market = () => {
    return (
        <Container fluid>
        <Row >
            Hello
          <Col> 
          <Figure>
      <Figure.Image
        width={600}
        height={180}
        alt="171x180"
        src={m3}
      />
      <Figure.Caption>
        M3
      </Figure.Caption>
    </Figure>
    </Col>
          <Col>
          <Figure>
      <Figure.Image
        width={600}
        height={180}
        alt="171x180"
        src={m4}
      />
      <Figure.Caption>
        M4
      </Figure.Caption>
    </Figure>
          
          </Col>
        </Row>

      </Container>
    )
};
export default Market;