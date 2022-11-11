import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import m3 from './images/m3.png';
import m4 from './images/m4.png';
import Figure from 'react-bootstrap/Figure';
import { productArray } from './productStore';
import ProductCard from './components/ProductCard';

const Market = () => {
    return (
        <Container fluid>
        <Row xs={1} md={3} className="g-4">
          {productArray.map((product, idx) =>(
                <Col align="center" key={idx}> 
                <ProductCard product={product}/>
                </Col>
            
          ))}
        </Row>

      </Container>
    )
};
export default Market;