import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { productArray } from './productStore';
import ProductCard from './components/ProductCard';

const Market = () => {
    return (
        <Container fluid>
          <h1>Market</h1>
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