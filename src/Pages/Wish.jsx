import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishList } from '../Redux/Slices/wishSlice';
import { addToCart } from '../Redux/Slices/cartSlice';

function Wish() {
  const dispatch = useDispatch();
  const { items = [] } = useSelector((state) => state.wishReducer || {});

  const handleAddToCart = (data) => {
    console.log(data);
    dispatch(addToCart({...data}));
    dispatch(removeFromWishList(data.id));
  };

  return (
    <>
      <h2 className="my-3 text-center">WishList</h2>
      <div className='container-fluid row p-5' style={{ minHeight: "90vh" }}>
        {
          items.length > 0 ? items.map((wish, index) => (
            <div className="col-3 p-3" key={index}>
              <div className="card">
                <img className="card-img-top" src={wish.thumbnail} alt={wish.title} />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">{wish.title}</h5>
                    ${wish.price}
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent text-center">
                  <button className='btn' onClick={() => dispatch(removeFromWishList(wish.id))}>
                    <i className="fa-solid fa-heart" style={{ color: "#e4012f" }} />
                  </button>
                  <button className='btn ms-auto' onClick={() => { handleAddToCart(wish) }}>
                    <i className="fa-solid fa-cart-shopping" />
                  </button>
                </div>
              </div>
            </div>
          ))
          :
          <div className="text-center">
            <h4>Your wishlist is empty.</h4>
          </div>
        }
      </div>
    </>
  );
}

export default Wish;
