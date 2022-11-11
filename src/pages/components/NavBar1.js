import { useState, useContext } from 'react';
import {Button, Container, Navbar, Modal, ModalBody} from 'react-bootstrap';
import { CartContext } from '../../CarContext';
import CartProduct from './CartProduct';
function NavbarComponent() {
    const cart = useContext(CartContext);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    return (
        <>
        <Button onClick={handleShow}> Cart ({productsCount} Items)</Button>
                <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {productsCount > 0 ?
                        <>
                            <p>Items in your cart:</p>
                            {cart.items.map((currentProduct, idx) => (
                                <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                            ))}

                            <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

                            <Button variant='success'>
                                Purchase Items
                            </Button>
                        </>   
                    :
                    <h1>ModalBody</h1>
                }
                    

                </Modal.Body>

            </Modal>

 
 
    </>
    )
}
export default NavbarComponent;