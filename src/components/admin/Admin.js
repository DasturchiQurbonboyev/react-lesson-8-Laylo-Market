import React from 'react'
import "./Admin.css"


function Admin() {
    return (
        <div className=' kontainer container px-5 py-24'>
            <div className='kontainer admin__top'>
                <div className='admin__top__left'>
                    <h1>Admin</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, recusandae
                        necessitatibus quasi incidunt alias adipisci pariatur earum iure beatae assumenda
                        rerum quod. Tempora magni autem a voluptatibus neque.
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae rerum cum
                        accusamus magni consequuntur architecto, ipsum deleniti expedita doloribus
                        suscipit voluptatum eius perferendis amet!.
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, maxime amet
                        architecto est exercitationem optio ea maiores corporis beatae, dolores doloribus
                        libero nesciunt qui illum? Voluptates deserunt adipisci voluptatem magni sunt sed
                        blanditiis quod aspernatur! Iusto?
                    </p>
                    <div className='admin__top__left__box'>
                        <div className='admin__top__left__box__card'>
                            <h2>0.1 <span>k</span></h2>
                            <p>Vendors</p>
                        </div>
                        <div className='admin__top__left__box__card'>
                            <h2>23 <span>k</span></h2>
                            <p>Customers</p>
                        </div>
                        <div className='admin__top__left__box__card'>
                            <h2>2 <span>k</span></h2>
                            <p>Products</p>
                        </div>
                    </div>
                </div>
                <div className='admin__top__reight'>
                    {/* <img src={img} alt="" /> */}
                </div>
            </div>
            <div className=' admin__bottom'>
                <div className='admin__bottom__card'>
                    <h5>Product Packing</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>
                <div className='admin__bottom__card'>
                    <h5>24X7 Support</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>
                <div className='admin__bottom__card'>
                    <h5>Delivery in 5 Days</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>
                <div className='admin__bottom__card'>
                    <h5>Payment Secure</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>
            </div>
        </div>
    )
}

export default Admin