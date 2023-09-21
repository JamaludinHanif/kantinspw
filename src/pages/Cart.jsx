import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Cart() {
    return(
        <>
            <Navbar />
            <div className="bg-primary dark:bg-gelap">
                <div className="my-48 dark:text-grey">
                <h1>
                    ini tampilan keranjang
                </h1>
                </div>
            </div>
            <Footer />
        </>
    )
}