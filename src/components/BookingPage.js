import React from "react";
import Footer from './components/Footer';
import Reserve from './components/Reserve';
import Confirmation from './components/Confirmation';
import { Routes, Route, BrowserRouter} from 'react-router-dom';

function BookingPage() {

    return (
        <>
            <BrowserRouter>

                <Routes>
                    <Route path="/reserve" element={<Reserve />} />
                    <Route path="/confirmation" element={<Confirmation />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default BookingPage;