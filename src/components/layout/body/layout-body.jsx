import { Container, Image } from "react-bootstrap"
import Landing from "./landing/layout-body-landing"
import AboutUs from "./about-us/layout-body-about-us"
import Services from "./our-services/layout-body-services"
import Technologies from "./technologies/layout-body-technologies"
import WorkWithUs from "./work-with-us/layout-body-work-with-us"
import Footer from "./footer/layout-footer"

const Body = () => {
    return (
        <>
            <Landing />
            <AboutUs />
            <Services />
            <Technologies />
            <WorkWithUs />
            <Footer />
        </>
    )
}

export default Body
