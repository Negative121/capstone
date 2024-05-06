import React from "react";
import Footer from './Footer';
import Reserve from './Reserve';
import Confirmation from './Confirmation';
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