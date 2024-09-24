import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { removeFromCart,increaseQuantity, decreaseQuantity,checkOut } from '../Redux/Slices/cartSlice';
import { Link } from 'react-router-dom';

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cartReducer.cart || []);

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  

  return (
    <div className="container-fluid p-5">
      <h2>Cart Summary</h2>
      <Row>
        <Col sm={12} md={8}>
          <table className="table table-bordered border shadow border-4 border-dark">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Image</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>
                      <img src={item.thumbnail} width={"150px"} alt={item.title} />
                    </td>
                    <td>{item.price}</td>
                    <td>
                      <button className="btn" onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                      <input type="text" className='form-control w-25' value={item.quantity} readOnly />
                      <button className="btn" onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                    </td>
                    <td>
                      <button className='btn btn-outline' >
                      <i className="fa-solid fa-trash" style={{ color: "#e20346",cursor:"pointer" }} onClick={() => dispatch(removeFromCart(item.id))} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center">Your cart is empty.</td>
                </tr>
              )}
            </tbody>
          </table>
        </Col>
        <Col sm={12} md={4}>
          <div className="border shadow p-4">
            <h4>Total Quantity: {totalQuantity}</h4>
            <h4>Total Amount: $ {totalPrice}</h4>
            <div className="d-grid"> 
              <button className="btn btn-success" onClick={()=>dispatch(checkOut())}>Check out</button>
            </div>
          </div>
          <Link className="btn btn-outline-info mt-5 ms-2" to={'/'}>Shop More</Link>
        </Col>
      </Row>
    </div>
  );
}

export default Cart;
