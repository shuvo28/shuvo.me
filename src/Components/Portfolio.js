import React, {useState, useEffect} from 'react'
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import $ from "jquery"

function Portfolio() {
  AOS.init();
  const [data, setData] = useState({data:[]});
  const [portfolioDetails, setPortfolioDetails] = useState({});

  useEffect(() =>{
    axios.get('http://localhost:8000/api/front/portfolios')
    .then(res => {
      setData(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  }, [])

  const showByid = (id) => {
    axios.get(`http://localhost:8000/api/front/portfolios/${id}`)
    .then((res) => {
        setPortfolioDetails(res.data);
        $('#portfolioModal').modal({show : true})
    })
    .catch((err) => {
        console.log(err);
    });
  }

  const showModal =() => {
    return ( 
      <div className="modal"  id="portfolioModal">
        <div className="modal-dialog modal-container" role="document">
            <div className='modal-con row position-relative'>
                  <div className='close-btn-con' data-dismiss="modal">
                    <p className='close-btn text-center'>X</p>
                  </div>
              <div className='col-lg-6'>
                <div className=''>
                  <img className='portfolio-modal-img' src={portfolioDetails.img}/>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='ms-3 '>
                  <p href='#' className='portfolio-modal-subtitle'>Featured - Design</p>
                  <h3 href='#' className="portfolio-modal-title">{portfolioDetails.title}</h3>
                  <div className='innerHTML'
                    dangerouslySetInnerHTML={{__html: portfolioDetails.desc}}
                  />
                  <div className='modal-btn-con'>
                      <a className='portfolio-modal-button me-5'>Like This <i className="fa-solid fa-thumbs-up"></i></a>
                      <a className='portfolio-modal-button'>View Project <i className="fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }

  return (
            <div id='portfolio' className='whatI-container'>
                {showModal()}
                <div className='main-container text-center' data-aos="fade-up">
                  <span className='whatI-sub'>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</span>
                  <h1 className='whatI-title'>My Portfolio</h1>
                </div>

                <div className='categories-container row'>

                  {
                    data.data.map((feature, index) => {
                      return (
                        <div key={'feature'+index} data-aos="fade-up" data-aos-delay={index * 100} className='my-2 col-md-6 col-xl-4'>
                          <a className="cat-card2 card m-2" 
                            onClick={(e) => {
                              e.preventDefault();
                              showByid(feature.id)
                            }}
                          >
                                <div className='content p-4'>
                                  <div className='card-img-con'>
                                    <img src={feature.img} className='card-img'/>
                                  </div>
                                  <div className=''>
                                    <div className='title-con mt-3'>
                                      <p href='#' className='title-con-header'>{feature.category}</p>
                                      <p className='title-con-desc'><span>
                                      <i className="fa-solid fa-clock me-2"></i>
                                        </span>{feature.read_time}</p>
                                    </div>
                                    <p href='#' className="card-title2">{feature.title}</p>
                                  </div>
                                </div>
                          </a>
                          
                          
                        </div>
                      )

                    } )
                  }

                  
                </div>
                
            </div>
  )
}

export default Portfolio;
