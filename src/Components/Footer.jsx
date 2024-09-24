import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className="container-fluid bg-secondary p-5">
    <Row>
        <Col md={4} sm={12}>
        <h3>E-Kart</h3>
        <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur commodi laboriosam neque exercitationem praesentium, necessitatibus facilis. Cum, praesentium eveniet, error tempora non debitis magni ratione iste aliquam minus excepturi adipisci!</p>
        </Col>
        <Col md={4} sm={12}>
        <div className="text-center d-flex flex-column justify-content-between">
            <h3>References</h3>
            <Link to={"/"}>Home</Link>
            <Link to={"/wish"}>Wishlist</Link>
            <Link to={"/cart"}>Cart</Link>
            </div></Col>
        <Col md={4} sm={12}>
        <h3>Feedbacks</h3>
        <textarea name="" id="" className='form-control'></textarea>
        <button className='btn btn-success mt-3'>Sent</button>
        </Col>

    </Row>
    </div>
    </>
  )
}

export default Footer