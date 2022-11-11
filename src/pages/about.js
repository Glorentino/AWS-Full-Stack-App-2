import m4 from "./images/bmw-m4.jpg"
const About = () => {
    return (
        <>
        <header>
        <h1 >Contuso</h1>
        </header>
        <section class="content-section container">
            <h2 class="section-header">ABOUT US</h2>
            <img width={800}src={m4}></img>
            <p>Based in the US, Contuso is the #1 auto part ecommerce site on the Internet. 
                First established in 3000. Over the years, We built many partnerships with the most elite car manufacturers on the planet. 
                These unique partnership guarantees that every vehicle part we sell is an official licensed product of the brand. 
                We expertly analyze all the part received, and it is this level of care and attention we deliver the stunning quality for which we are famed
            </p>
            <p> We are Contuso. </p>
            
        </section>
        <section class="content-section container">
            <h2 class="section-header">CONTACT US</h2>
            <h3> EMAIL</h3>
            <p>
                help@contuso.com
            </p>
            <h3>Headquarters</h3>
            <p>
                Street Address <br/>
                New York, NY 10001
            </p>
            <p> We are Contuso. </p>
            
        </section>
        </>
    )
};
export default About;