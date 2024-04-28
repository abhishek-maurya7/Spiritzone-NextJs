'use client'
import React from 'react';

const OrderSuccessful: React.FC = () => {
    let handleClick = () => {
        window.location.href = '/'

    }
    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center">Order Successful!</h2>
                            <p className="card-text text-center">Thank you for your order. Your order has been successfully placed.</p>
                            <div className="text-center">
                                <button onClick={handleClick} className='btn btn-primary'>Continue</button>
                            </div>
                        </div>
                        <div className="card-footer text-muted">
                            <p className="text-center">You will receive an email confirmation shortly with order details.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderSuccessful;
