import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Produk from "../components/Produk";
import Slider from "../components/Slider";

export default function Producs() {
    return (
        <>
        
            <Navbar />

            <Slider />
            <div className="bg-primary dark:bg-gelap">
                <div className="my-10 dark:text-grey">
                
                    <h1>Ini adalah tampilan Produklist</h1>

                </div>
            </div>
            <Produk />
            <Footer />
        
        </>
    )
}