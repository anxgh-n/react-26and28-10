import { useState } from "react";

export default function EcomList() {
  const [cart, setCart] = useState([]);
  
  let allProducts = [
    {
      prodId: 501,
      prodName: "Laptop",
      prodCost: 40000,
      prodImage:
        "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww",
    },
    {
      prodId: 502,
      prodName: "Mobile",
      prodCost: 30000,
      prodImage:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlfGVufDB8fDB8fHww",
    },
    {
      prodId: 503,
      prodName: "Tablet",
      prodCost: 20000,
      prodImage:
        "https://plus.unsplash.com/premium_photo-1673968280716-ca0c00af8a39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFibGV0fGVufDB8fDB8fHww",
    },
    {
      prodId: 504,
      prodName: "Watch",
      prodCost: 30000,
      prodImage:
        "https://media.istockphoto.com/id/1189984324/photo/smart-watch-for-branding-and-mock-up-3d-render-illustration.webp?a=1&b=1&s=612x612&w=0&k=20&c=obd89zfN8JUq7fiQdLoI7KCl-_N3CwpvLur3D5s-zZs=",
    },
    {
      prodId: 505,
      prodName: "Desktop",
      prodCost: 25000,
      prodImage:
        "https://plus.unsplash.com/premium_photo-1683326528070-4ebec9188ae1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGVza3RvcHxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  function addToCart(prodId) {
    //fetch prody with id prodid
    let fetchedProduct = allProducts.find((eachProduct)=>eachProduct.prodId == prodId);
    //add product the product objectto the cart array state variable
    let newId = cart.length == 0? 1:cart[cart.length-1].cartId+1;
    setCart([...cart, {...fetchedProduct, cartId:newId}]); //
  }

  function deleteCartItem(cartId){
    let filterCart = cart.filter((eachCart)=>eachCart.cartId != cartId);
    setCart(filterCart);
  }

  let mappedCart = cart.map((eachCart) => (
    <tr key={eachCart.cartId}>
      <td>{eachCart.cartId}</td>
      <td>{eachCart.prodName}</td>
      <td>Rs. {eachCart.prodCost}</td>
      <td>
        <button className="btn btn-danger" onClick={()=>deleteCartItem(eachCart.cartId)}>
            🗑️</button>
      </td>
    </tr>
  ));

  let mappedAllProducts = allProducts.map((eachProduct) => (
    <div className="col-sm-12 col-md-6 col-lg-3" key={eachProduct.prodId}>
      <div className="card m-2">
        <img className="" src={eachProduct.prodImage}></img>
        <div className="card-title">
          <h5>{eachProduct.prodName}</h5>
        </div>
        <div className="card-text">
          <p>Product ID: {eachProduct.prodId}</p>
        </div>
        <div className="card-text">
          <p>Product Price: {eachProduct.prodCost}</p>
        </div>
        <div>
          <button
            className="btn btn-warning"
            onClick={() => addToCart(eachProduct.prodId)}
          >
            🛒
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="container m-3">
        <div className="row">
          <div className="col-9">
            <h3>LIST OF GADGETS</h3>
            <div className="row">{mappedAllProducts}</div>
          </div>
          <div className="col-3">
            <h3>CART</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>CART ID</th>
                        <th>PROD ID</th>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                        {mappedCart}
                    </tbody>
            </table>
            <div>
                <p>Total Items:{cart.length}</p>
                <p>
                    Total Cost: Rs.
                    {cart.reduce(
                        (sum, eachCart)=>sum+ eachCart.prodCost,0
                    ) }
                    </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
