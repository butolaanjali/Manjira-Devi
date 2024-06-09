import React from "react"
import StudentLife from "./Studentlife/Studentlife"
import StudentSpeak from "./Testimonial/StudentSpeak"
import Activities from "./Activities/Activities"
import Program from "./Program/Program"
import OurSchools from "./OurSchool/OurSchool"
import Layout from "./Layout/Layout"

const Home = () =>{
    return(
        <>
        <OurSchools/>
        <Program/>
        <Layout/>
        <Activities/>
        <StudentSpeak/>
        <StudentLife/>
        </>
    )
}
export default Home