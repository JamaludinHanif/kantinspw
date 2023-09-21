import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

export default function About () {
    return (
        <>
        
            <Navbar />

            <Slider />
            
            <div className="bg-primary dark:bg-gelap">
            <div className="my-48 dark:text-grey">
            <h1>
                Website ini dibuat oleh Jamaludin Hanif, follow : 
                <a href="https://www.instagram.com/_ha_nif/">
                    <span className="text-white dark:text-primary"> my instagram</span>
                </a>
            </h1>
            </div>
            </div>
            
            

            <Footer />
        
        </>
    )
}