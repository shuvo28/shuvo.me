import React, {useState, useEffect} from 'react'
import axios from 'axios';

 function Resume() {
    const [education, setEducation] = useState({data:[]});
    const [job, setJob] = useState({data:[]});

    useEffect(() => {
        axios.get('http://localhost:8000/api/front/educations')
        .then(res => {
            setEducation(res.data)
        })
        .catch(err => {
            console.log('err', err)
        })
    }, [])

    useEffect(() =>{
        axios.get('http://localhost:8000/api/front/jobs')
        .then(res =>{
            setJob(res.data)
        })
        .catch(err => {
            console.log('err :', err)
        })
    }, [])
  return (
    <div id='resume'>
        <div className='main-container text-center'>
            <span className='whatI-sub'>7+ YEARS OF EXPERIENCE</span>
            <h1 className='whatI-title'>My Resume</h1>
        </div>
        <div className='mt-5'>
            <div className='pricing-subcon'>
                <ul className="nav nav-tabs resume-button-con row" id="pills-tab" role="tablist">
                    <li className="nav-item col-md-12 col-lg-3" role="presentation">
                        <a className="nav-link active" id="edu-tab" data-bs-toggle="tab" data-bs-target="#edu" type="button" role="tab" aria-controls="edu" aria-selected="true">Education</a>
                    </li>
                    <li className="nav-item col-md-12 col-lg-3" role="presentation">
                        <a className="nav-link" id="pro-tab" data-bs-toggle="tab" data-bs-target="#pro" type="button" role="tab" aria-controls="pro" aria-selected="false">Professional Skills</a>
                    </li>
                    <li className="nav-item col-md-12 col-lg-3" role="presentation">
                        <a className="nav-link" id="expe-tab" data-bs-toggle="tab" data-bs-target="#expe" type="button" role="tab" aria-controls="expe" aria-selected="false">Experience</a>
                    </li>
                    <li className="nav-item col-md-12 col-lg-3" role="presentation">
                        <a className="nav-link" id="interview-tab" data-bs-toggle="tab" data-bs-target="#interview" type="button" role="tab" aria-controls="interview" aria-selected="false">Interview</a>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="edu" role="tabpanel" aria-labelledby="edu-tab">
                        <div className='row margin-con'>
                            <div className='col-lg-6'>
                                <div className='mt-5'>
                                    <span className='whatI-sub'>2012 - 2022</span>
                                    <h1 className='whatI-title'>Education Quality</h1>
                                </div>
                                <div className='resume-con'>
                                    {
                                        education.data.map((edu, index) => {
                                            return (
                                            <div key={index} className='resume-subcon mt-5'>
                                                <div className='left-border'></div>
                                                <div className='left-circle'></div>
                                                <div className="resume-card card ">
                                                    <div href='#' className='resume-content'>
                                                        <div className='resume-header'>
                                                            <div className=''>
                                                                <h5 className="resume-title">{edu.title}</h5>
                                                                <p className='resume-subtitle'>{edu.institute}</p>
                                                            </div>
                                                            <div className='res-rating'>
                                                                <span>{edu.rating}</span>
                                                            </div>
                                                        </div>
                                                        <p className='resume-desc'>{edu.desc}</p>
                                                       
                                                    </div>
                                                </div>
                                            </div> 
                                            )
                                        })
                                    }
                                   

                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className='mt-5'>
                                    <span className='whatI-sub'>2020 - 2022</span>
                                    <h1 className='whatI-title'>Job Experience</h1>
                                </div>
                                <div className='resume-con'>
                                {
                                        job.data.map((edu, index) => {
                                            return (
                                            <div key={index} className='resume-subcon mt-5'>
                                                <div className='left-border'></div>
                                                <div className='left-circle'></div>
                                                <div className="resume-card card ">
                                                    <div href='#' className='resume-content'>
                                                        <div className='resume-header'>
                                                            <div className=''>
                                                                <h5 className="resume-title">{edu.title}</h5>
                                                                <p className='resume-subtitle'>{edu.institute}</p>
                                                            </div>
                                                            <div className='res-rating'>
                                                                <span>{edu.rating}</span>
                                                            </div>
                                                        </div>
                                                        <p className='resume-desc'>{edu.desc}</p>
                                                       
                                                    </div>
                                                </div>
                                            </div> 
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pro" role="tabpanel" aria-labelledby="pro-tab">
                    <div className='row margin-con'>
                            <div className='col-lg-6'>
                                <div className='mt-5'>
                                    <span className='whatI-sub'>Features</span>
                                    <h1 className='whatI-title'>Design Skill</h1>
                                </div>
                                <div className='my-5'>
                                    <div className='prog-con'>
                                        <p className='bar-txt'>PHOTOSHOT</p>
                                        <div className="progress">
                                            <div className="progress-bar" style={{width: '100%'}} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className='perc'><span>100%</span></div>
                                    </div>
                                    <div className='prog-con'>
                                        <p className='bar-txt'>FIGMA</p>
                                        <div className="progress">
                                            <div className="progress-bar" style={{width: '95%'}} role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className='perc2'><span>95%</span></div>
                                    </div>
                                    <div className='prog-con'>
                                        <p className='bar-txt'>ADOBE XD</p>
                                        <div className="progress">
                                            <div className="progress-bar" style={{width: '60%'}} role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className='perc3'><span>60%</span></div>
                                    </div>
                                    <div className='prog-con'>
                                        <p className='bar-txt'>ADOBE ILLUSTRATOR</p>
                                        <div className="progress">
                                            <div className="progress-bar" style={{width: '70%'}} role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className='perc4'><span>70%</span></div>
                                    </div>
                                    <div className='prog-con'>
                                        <p className='bar-txt'>DESIGN</p>
                                        <div className="progress">
                                            <div className="progress-bar" style={{width: '90%'}} role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className='perc5'><span>90%</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className='mt-5'>
                                    <span className='whatI-sub'>Features</span>
                                    <h1 className='whatI-title'>Development Skill</h1>
                                </div>
                                <div className='my-5'>
                                <div className='prog-con'>
                                        <p className='bar-txt'>HTML</p>
                                        <div className="progress">
                                            <div className="progress-bar" style={{width: '85%'}} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className='perc' style={{right: 85}}><span>85%</span></div>
                                    </div>
                                    <div className='prog-con'>
                                        <p className='bar-txt'>CSS</p>
                                        <div className="progress">
                                            <div className="progress-bar" style={{width: '80%'}} role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className='perc2' style={{right: 100}}><span>80%</span></div>
                                    </div>
                                    <div className='prog-con'>
                                        <p className='bar-txt'>JAVASCRIPT</p>
                                        <div className="progress">
                                            <div className="progress-bar" style={{width: '90%'}} role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className='perc3' style={{right: 70}}><span>90%</span></div>
                                    </div>
                                    <div className='prog-con'>
                                        <p className='bar-txt'>SOFTWARE</p>
                                        <div className="progress">
                                            <div className="progress-bar" style={{width: '75%'}} role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className='perc4'><span>75%</span></div>
                                    </div>
                                    <div className='prog-con'>
                                        <p className='bar-txt'>PLUGIN</p>
                                        <div className="progress">
                                            <div className="progress-bar" style={{width: '70%'}} role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className='perc5' style={{right: 160}}><span>70%</span></div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="expe" role="tabpanel" aria-labelledby="expe-tab">
                    <div className='row margin-con'>
                            <div className='col-lg-6'>
                                <div className='mt-5'>
                                    <span className='whatI-sub'>2012 - 2022</span>
                                    <h1 className='whatI-title'>Education Quality</h1>
                                </div>
                                <div className='resume-con'>
                                {
                                        education.data.map((edu, index) => {
                                            return (
                                            <div key={index} className='resume-subcon mt-5'>
                                                <div className='left-border'></div>
                                                <div className='left-circle'></div>
                                                <div className="resume-card card ">
                                                    <div href='#' className='resume-content'>
                                                        <div className='resume-header'>
                                                            <div className=''>
                                                                <h5 className="resume-title">{edu.title}</h5>
                                                                <p className='resume-subtitle'>{edu.institute}</p>
                                                            </div>
                                                            <div className='res-rating'>
                                                                <span>{edu.rating}</span>
                                                            </div>
                                                        </div>
                                                        <p className='resume-desc'>{edu.desc}</p>
                                                       
                                                    </div>
                                                </div>
                                            </div> 
                                            )
                                        })
                                    }
                                   

                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className='mt-5'>
                                    <span className='whatI-sub'>2020 - 2022</span>
                                    <h1 className='whatI-title'>Job Experience</h1>
                                </div>
                                <div className='resume-con'>
                                {
                                        job.data.map((edu, index) => {
                                            return (
                                            <div key={index} className='resume-subcon mt-5'>
                                                <div className='left-border'></div>
                                                <div className='left-circle'></div>
                                                <div className="resume-card card ">
                                                    <div href='#' className='resume-content'>
                                                        <div className='resume-header'>
                                                            <div className=''>
                                                                <h5 className="resume-title">{edu.title}</h5>
                                                                <p className='resume-subtitle'>{edu.institute}</p>
                                                            </div>
                                                            <div className='res-rating'>
                                                                <span>{edu.rating}</span>
                                                            </div>
                                                        </div>
                                                        <p className='resume-desc'>{edu.desc}</p>
                                                       
                                                    </div>
                                                </div>
                                            </div> 
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="interview" role="tabpanel" aria-labelledby="interview-tab">
                    <div className='row margin-con'>
                            <div className='col-lg-6'>
                                <div className='mt-5'>
                                    <span className='whatI-sub'>2020 - 2020</span>
                                    <h1 className='whatI-title'>Company Experience</h1>
                                </div>
                                <div className='resume-con'>
                                {
                                        education.data.map((edu, index) => {
                                            return (
                                            <div key={index} className='resume-subcon mt-5'>
                                                <div className='left-border'></div>
                                                <div className='left-circle'></div>
                                                <div className="resume-card card ">
                                                    <div href='#' className='resume-content'>
                                                        <div className='resume-header'>
                                                            <div className=''>
                                                                <h5 className="resume-title">{edu.title}</h5>
                                                                <p className='resume-subtitle'>{edu.institute}</p>
                                                            </div>
                                                            <div className='res-rating'>
                                                                <span>{edu.rating}</span>
                                                            </div>
                                                        </div>
                                                        <p className='resume-desc'>{edu.desc}</p>
                                                       
                                                    </div>
                                                </div>
                                            </div> 
                                            )
                                        })
                                    }
                                   

                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className='mt-5'>
                                    <span className='whatI-sub'>2020 - 2020</span>
                                    <h1 className='whatI-title'>Job Experience</h1>
                                </div>
                                <div className='resume-con'>
                                {
                                        job.data.map((edu, index) => {
                                            return (
                                            <div key={index} className='resume-subcon mt-5'>
                                                <div className='left-border'></div>
                                                <div className='left-circle'></div>
                                                <div className="resume-card card ">
                                                    <div href='#' className='resume-content'>
                                                        <div className='resume-header'>
                                                            <div className=''>
                                                                <h5 className="resume-title">{edu.title}</h5>
                                                                <p className='resume-subtitle'>{edu.institute}</p>
                                                            </div>
                                                            <div className='res-rating'>
                                                                <span>{edu.rating}</span>
                                                            </div>
                                                        </div>
                                                        <p className='resume-desc'>{edu.desc}</p>
                                                       
                                                    </div>
                                                </div>
                                            </div> 
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
export default Resume;