import React, {useState, useEffect} from 'react'
import axios from 'axios';

function Pricing() {
  const [pricing, setPricing] = useState({data:[]});

  useEffect(() =>{
    axios.get('http://localhost:8000/api/front/pricings')
    .then(res =>{
      setPricing(res.data)
    })
    .catch(err => {
      console.log('pricing err', err)
    })
  }, [])
  
  return (  
            <div id='pricing' className='row pricing-con'>
                <div className='col-md-12 col-lg-4 col-xl-5 d-flex price-header'>
                  <div className=' pri-con'>
                    <div className='text-center prc'>
                      <span className='whatI-sub'>PRICING</span>
                      <h1 className='pricing-title'>My Pricing</h1>
                    </div>
                  </div>
                </div>
                <div className='col-md-12 col-lg-8 col-xl-7 mt-5'>
                    <div className='pricing-subcon'>
                      <ul className="nav nav-tabs price-button-con" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                          <a className="nav-link" id="static-tab" data-bs-toggle="tab" data-bs-target="#static" type="button" role="tab" aria-controls="static" aria-selected="true">Static</a>
                        </li>
                        <li className="nav-item position-relative " role="presentation">
                          <p className='recommended'>Recommended</p>
                          <a className="nav-link active" id="standard-tab" data-bs-toggle="tab" data-bs-target="#standard" type="button" role="tab" aria-controls="standard" aria-selected="false">Standard</a>
                        </li>
                        <li className="nav-item" role="presentation">
                          <a className="nav-link" id="premium-tab" data-bs-toggle="tab" data-bs-target="#premium" type="button" role="tab" aria-controls="premium" aria-selected="false">Premium</a>
                        </li>
                      </ul>
                      <div className="tab-content tab-content22" id="myTabContent">

                        {
                          pricing.data.map((item, index) => {
                            let features = JSON.parse(item.features);                            
                            return (
                          <div key={'item'+ index} className={"tab-pane fade" +(index === 2 ? 'show active' : '')} id={item.package_name} role="tabpanel" aria-labelledby={item.package_name+"-tab"}>
                          <div className='static-con mt-3'>
                            <div className='static-top-txt'>
                              <div>
                                <h2 className='static-title'>{item.title}</h2>
                                <p className='static-titleun'>Elementor</p>
                              </div>
                              <div className='money-con'>
                                <span className='money'>${item.price}</span>
                              </div>
                            </div>
                            <p className='static-subtitle'>{item.desc}</p>
                            <div className='ul-con'>
                              <ul className='left-area'>
                                {
                                   features.map((feature, index) => {
                                    if(index % 2 !== 1 || index === 0){
                                      return (<li key={'fe-ti'+index}><i className="fa-solid fa-check me-2"></i>{feature.feature_title}</li>)
                                    }
                                  })
                                }
                              </ul>
                              <ul className='right-area'>
                                {
                                  features.map((feature, index) => {
                                     if(index % 2 === 1 && index !== 0){
                                      return (<li key={'fe-ti'+index}><i className="fa-solid fa-check me-2"></i>{feature.feature_title}</li>)
                                    }
                                  })
                                }
                              </ul>
                            </div>
                            
                            <div className='order-butt-con'>
                              <a href='#contact' className='order-butt hvr-sweep-to-right'>ORDER NOW<i className='fa-solid fa-arrow-right fa-lg ms-2'></i></a>
                            </div>
                            
                            <div className='static-footer'>
                              <p className='me-3'><i className='fa-solid fa-clock me-2'></i>{item.delivery_time} Days Delivery</p>
                              <p className='ms-3'><i className="fa-solid fa-bolt me-2"></i>Unlimited Revission</p>
                            </div>
                          </div>
                        </div>
                         ) })
                        }
                    
                      </div>
                    </div>
                </div>
            </div>
  )
}

export default Pricing;
