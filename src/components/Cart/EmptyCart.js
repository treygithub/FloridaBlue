import React from 'react'

export default function EmptyCart() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 mx-auto text-center title-text">
            <h1 style={{color:"gray",fontWeight:"bold"}}>Cart is Empty! Try Adding Items First</h1>
        </div>
      </div>
    </div>
  )
}
