import React from 'react';
import './Activities.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const activitiesData = [
    {
        image: "activity1.jpeg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium necessitatibus neque quae tempora......"
    },
    {
        image: "activity2.jpeg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium necessitatibus neque quae tempora......"
    },
    {
        image: "activity3.jpeg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium necessitatibus neque quae tempora......"
    },
    {
        image: "activity4.jpeg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium necessitatibus neque quae tempora......"
    },
    // Add more activity data here
];

const Activities = () => {
    const options = {
        loop: true,
        margin: 1,
        nav: true,
        dots: false,
        autoplay: true,           
        autoplayTimeout: 3000,    
        autoplayHoverPause: true, // Pause on hover
        smartSpeed: 1000, 
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 3
            },
        },
        navText: [
            '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
            '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        ]
    };

    return (
        <section className="ytt-courses py-2" style={{ backgroundColor: '#1f418a' }}>
            <div className="container">
                <div className="row justify-content-between pb-1">
                    <div className="col-md-12 heading-section text-center ">
                        <span className="subheading">Activities</span>
                        <div className="text-center">
                            <h3 className="title" style={{ fontFamily: "'Times New Roman', Times, serif", color: 'white' }}>Featured Events & Activities @Manjira Devi University</h3>
                        </div>
                    </div>
                </div>
                <OwlCarousel className="owl-theme" {...options}>
                    {activitiesData.map((activity, index) => (
                        <div className="post-slide" key={index}>
                            <div className="post-img">
                                <img src={activity.image} alt="" className="img-fluid" />
                            </div>
                            <div className="post-content text-center">
                                <h6 className="post-title">{activity.title}</h6>
                                <p className="post-description">{activity.description}</p>
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
            </div>
        </section>
    );
}

export default Activities;
