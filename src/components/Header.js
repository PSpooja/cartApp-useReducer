
import { Badge, Container, FormControl, Navbar, Dropdown, Button } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import {FaShoppingCart} from "react-icons/fa"
import { Link, NavLink } from 'react-router-dom';
import './style.css'
import { CartState } from '../contextApis/Context';

function Header () {
    const{state : {cart}, dispatch, productDispatch} = CartState()

    return <Navbar bg="dark" variant='dark' style={{height : 80}}>
        <Container>
            <Navbar.Brand>
                <Link to="/">Shopping Cart</Link>
            </Navbar.Brand>
            <Navbar.Text>
                <FormControl style={{width : 500}} 
                placeholder='search a product' 
                className='m-auto'
                onChange={(e) => productDispatch({
                    type : 'FILTER_BY_SEARCH',
                    payload : e.target.value
                })}
                />
            </Navbar.Text>
            <Dropdown alignRight>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                <FaShoppingCart  style={{fontSize :  25, color:"white"}}/>
                <Badge bg="success">{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{minWidth : 350}}>
                {cart.length > 0 ? (
                    <>
                      {cart.map((prod) => (
                          <span className='cartitem'>
                            <img 
                            src={prod.image}
                            alt={prod.name}
                            className='cartItemImg'/>
                            <div className='cartItemDetail'>
                                <span>{prod.name}</span>
                                <span>Rs {prod.price.split('.')[0]}</span>
                            </div>
                            <AiFillDelete 
                            fontSize={20}
                            style={{cursor : "pointer"}}
                            onClick={() => {
                                dispatch({
                                    type : "REMOVE_FROM_CART",
                                    payload : prod
                                })
                            }}/>
                          </span>
                    ))}

                    <NavLink to="/cart">
                        <Button style={{width : "95%", margin : "0 10px"}}>
                            Go to cart
                        </Button>
                    </NavLink>
                    </>
                 
                ) : ( <span style={{padding:10}}>Cart is Empty!</span> )
                
                }
                
            </Dropdown.Menu>
            </Dropdown>
        </Container>
    </Navbar>
}

export default Header;