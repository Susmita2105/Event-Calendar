import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import AboutUsSectionImg from '../../utils/images/about-us-section-img.jpg';
import Lab1 from '../../utils/images/Lab1.jpg';
import Lab2 from '../../utils/images/Lab2.jpg';
import Lab3 from '../../utils/images/Lab3.jpg';

function About() {
  return (
    <div className='about-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>About Us</h1>
                <p className='text-center w-75 mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error recusandae harum ullam repellat cum? Nisi unde, incidunt natus ut ratione dolore quasi at dolores molestias.</p>
            </div>
        </header>

        <div className='container my-5'>
            <div className="row">
                <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                    <h2 className='mb-4 mb-lg-5'>Study with us</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, sunt saepe fugit dolores error mollitia doloribus optio, recusandae aperiam, nihil eius rem eum eaque sequi. Earum perspiciatis laudantium at quo sapiente perferendis distinctio, voluptatum obcaecati ipsa, eos nesciunt saepe adipisci placeat ducimus! Dignissimos quaerat fugiat consequuntur tempora fuga eveniet nobis!</p>
                    <p className='mb-4 mb-lg-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et quas ipsa assumenda eos veritatis nemo fuga dolore saepe eius, laborum earum magni id quae quidem tempore tempora consequuntur eveniet voluptatibus, suscipit atque, voluptatem blanditiis deleniti perferendis dolores. Architecto corporis sit suscipit labore modi sint facilis alias laboriosam facere et? Quo eum neque dolores iure, nam voluptates nesciunt quisquam modi maxime alias! Blanditiis vel dicta voluptates ab vero quia incidunt facilis ratione deserunt, inventore atque necessitatibus?</p>
                    <Link to="/contact">
                        <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
                    </Link>
                </div>
                <div className='col-lg-6 d-flex justify-content-center'>
                    <img src={AboutUsSectionImg} className='img-fluid w-75' alt="" />
                </div>
            </div>
            
        </div>

        <div className='bg-dark text-light p-5'>
            <div className='container'>
                <h2 className='text-center mb-5'>Our Labs</h2>
                <div className='row g-4'>
                    <div className='col-lg-4 d-flex flex-column align-items-center'>
                        <img src={Lab1} className='img-fluid' alt="" />
                        <h3 className='text-center mt-3'>Applied Electromagnetics lab</h3>
                    </div>
                    <div className='col-lg-4 d-flex flex-column align-items-center'>
                        <img src={Lab2} className='img-fluid' alt="" />
                        <h3 className='text-center mt-3'>Communication Lab</h3>
                    </div>
                    <div className='col-lg-4 d-flex flex-column align-items-center'>
                        <img src={Lab3} className='img-fluid' alt="" />
                        <h3 className='text-center mt-3'>Microelectronics Lab</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default About;