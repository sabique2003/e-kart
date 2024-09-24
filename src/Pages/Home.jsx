import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductThunk } from '../Redux/Slices/productSlice';
import Spinner from 'react-bootstrap/Spinner';
import { prevPage,nextPage } from '../Redux/Slices/productSlice';

function Home() {
  const { products, loading, error,productsPerPage,currentPage } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductThunk());
  }, [dispatch]);

  const handleNext=()=>{
    if(currentPage<totalPage){
      dispatch(nextPage())
    }
  }

  const handlePrev=()=>{
    if(currentPage>1){
      dispatch(prevPage())   
    }
  }

  const totalPage=Math.ceil(products?.length/productsPerPage)
  const lastProductIndex=currentPage*productsPerPage //10,20,30
  const firstProductIndex=lastProductIndex-productsPerPage  //0,10,20
  const visibleProduct=products?.slice(firstProductIndex,lastProductIndex)


  return (
    <>     
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-2 my-5">
          <div className="text-center text-white">
            <Carousel slide={false}>
              <Carousel.Item>
                <img src="https://www.shutterstock.com/image-vector/online-shopping-on-phone-buy-260nw-2078330851.jpg" alt="" 
                className='' height={"400px"} width={'80%'}/>
              </Carousel.Item>
              <Carousel.Item>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/004/299/835/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg"
                className='' height={"400px"} width={'80%'} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img src="https://www.shutterstock.com/image-vector/3d-yellow-great-discount-sale-260nw-2056851839.jpg"
                alt="" className='' width={'80%'} height={"400px"} />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </header>

      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {loading && (
              <h3>
                <Spinner animation="border" role="status" />
                <span className="visually-hidden">Loading...</span>
              </h3>
            )}
            {error && <h3>{error}</h3>}
            {!loading && !error && products.length > 0 && visibleProduct.map((product) => (
              <div className="col mb-5" key={product.id}>
                <div className="card h-100">
                  <img className="card-img-top" src={product.thumbnail} alt={product.title} />
                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">{product.title}</h5>
                      ${product.price}
                    </div>
                  </div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent text-center">
                    <Link to={`/view/${product.id}`} className='btn btn-outline-info'>View More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mb-3 d-flex justify-content-center">
        <div>
          <button className='btn' onClick={handlePrev}><i className="fa-solid fa-angles-left" /></button>
          {' '}
          {currentPage}/{totalPage}
          {' '}
          <button className='btn' onClick={handleNext}><i className="fa-solid fa-angles-right" /></button>
        </div>
      </div>
    </>
  );
}

export default Home;
