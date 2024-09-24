import React,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { searchWithKey } from '../Redux/Slices/productSlice';

function Header() {

  const {items} = useSelector((state)=>state.wishReducer)
  console.log(items);

  const {cart} = useSelector((state)=>state.cartReducer)

  const dispatch=useDispatch()

  const [key,setKey] =useState('')
  
  return (
    <>
        <Navbar className="bg-secondary">
        <Container>
          <Navbar.Brand href="/">
          <i className="fa-solid fa-cart-plus fa-xl" style={{color: "#5c45a1",}} />
            {' '}
            Ekart
          </Navbar.Brand>
          <div className='d-flex ms-5'>
              <input type="text" className='container-fluid me-2' placeholder='Search With KeyWord' onChange={(e)=>{setKey(e.target.value)}}/>
              <button className='btn btn-success' onClick={()=>{dispatch(searchWithKey(key))}}>Search</button>
            </div>
          <div>
            
            <Link className='btn border border-1 border-dark me-3' to={'/wish'}>
            <i className="fa-solid fa-heart" style={{color: "#d40830",}} />
            WishList
            <span className='badge bg-primary ms-2'>
              {items?.length}
            </span>
            </Link>
            <Link className='btn border border-1 border-dark me-3' to={'/cart'}>
            <i className="fa-solid fa-cart-shopping" />
            Cart
            <span className='badge bg-primary ms-2'>
              {cart?.length}
            </span>
            </Link>
            </div>
        </Container>
      </Navbar>
    </>
  )
}

export default Header