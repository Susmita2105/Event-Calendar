import React from 'react';
import './Event.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Event1Img from '../../utils/images/blog1-img.jpg';
import Event2Img from '../../utils/images/blog2-img.jpg';
import Event3Img from '../../utils/images/blog3-img.jpg';
import Event4Img from '../../utils/images/blog4-img.jpg';
import Event5Img from '../../utils/images/blog5-img.jpg';
import Event6Img from '../../utils/images/blog6-img.jpg';
import Event7Img from '../../utils/images/blog7-img.jpg';
import Event8Img from '../../utils/images/blog8-img.jpg';
import Event9Img from '../../utils/images/blog9-img.jpg';

const events = [
    {
        id: 1,
        img: [Event1Img],
        title: 'Event 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    },
    {
        id: 2,
        img: [Event2Img],
        title: 'Event 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    },
    {
        id: 3,
        img: [Event3Img],
        title: 'Event 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    },
    {
        id: 4,
        img: [Event4Img],
        title: 'Alumni Lecture Series: Seminar by Prof. Ajoy Kumar Ray',
        description: "Topic: Electronics in the age of Data Science. \nProfessor Ajoy Kumar Ray, a recipient of the prestigious Padma Shri award, served as the last Vice Chancellor of Bengal Engineering and Science University, Shibpur and later as the first Director of Indian Institute of Engineering, Science and Technology, Shibpur till 2018. After leading the institute with his experience and developing the academics with his constant guidance and support, he joined back at his alma mater, IIT Kharagpur. Professor Ray received his Bachelor's degree from Bengal Engineering College, Shibpur and his Ph.D and Master's from IIT Kharagpur where he joined as the faculty  of Electronics and Electrical Communication Engineering Department in 1980. He is the co-inventor of numerous US Patents jointly with Intel Corporation and with Texas Instruments and has also headed the School of Medical Science and Technology which has initiated projects on molecular imaging, medical instrumentation etc.  He has co-authored around 160 research papers and published five books by International Publication Houses, one of which is in Chinese.  Despite completing numerous research and consultancy projects sponsored by several agencies, he's still passionately pursuing research in Medical Imaging and Image processing, Pattern Recognition and Machine Intelligence."
    },
    {
        id: 5,
        img: [Event5Img],
        title: 'Invited Lecture Series: Seminar by Dr. Srutarshi Banerjee',
        description: "The Academic Society of Electronics and Telecommunications is delighted to announce an insightful session scheduled for January 11th, titled "Learning-based Intelligent Imaging and Beyond," featuring Dr. Srutarshi Banerjee. Dr. Banerjee, a distinguished Postdoctoral Researcher at the X-ray Science Division, Argonne National Laboratory, brings a wealth of expertise in computational imaging, machine learning, and neuromorphic computing."
    },
    {
        id: 6,
        img: [Event6Img],
        title: 'Event 6',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    },
    {
        id: 7,
        img: [Event7Img],
        title: 'Event 7',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    },
    {
        id: 8,
        img: [Event8Img],
        title: 'Event 8',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    },
    {
        id: 9,
        img: [Event9Img],
        title: 'Event 9',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    },
];

function Event() {
  return (
    <div className='blog-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Events</h1>
                <p className='text-center w-75 mb-5'>ASETE will organize weekly lectures from the month of January in two formats: Invited Lectures and Alumni Seminars. We are honoured to have Professor Ajoy Kumar Ray, the erstwhile director of IIEST, Shibpur to deliver the first talk of the series.</p>
            </div>
        </header>

        <div className='bg-body-tertiary py-5'>
            <div className="container">
                <div className="row g-4">
                    {events.map((event) => (
                        <div key={event.id} className='col-md-6 col-lg-4'>
                            <Link to="/event" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect bg-dark text-light border-0'>
                                    <Card.Img variant="top" src={event.img} />
                                    <Card.Body className='p-md-5 d-flex flex-column align-items-center'>
                                        <Card.Title className='fs-2 mb-4'>{event.title}</Card.Title>
                                        <Card.Text className='text-center'>{event.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Event;
