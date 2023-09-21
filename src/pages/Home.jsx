/* eslint-disable react/jsx-no-undef */
import Navbar from "../components/Navbar"
import Slider from "../components/Slider"
import Opening from "../components/Opening"
import Order from "../components/Order"
import Pertanyaan from "../components/Pertanyaan"
import Komentar from "../components/Komentar"
import Footer from "../components/Footer"


export default function Home () {
    return (
        <>

            <Navbar />
            <Slider />
            <Opening />
            <Order />
            <Pertanyaan />
            <Komentar />
            <Footer />

        </>
    )
}