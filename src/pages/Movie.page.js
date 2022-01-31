import React from "react";

const launchRazorPay = () => {
    let options = {
        key: "rzp_test_wyWNRmfyc2TIFp",
        amount: 10000,
        currency: "INR",
        name: "BMS Clone",
        descrition: "Movie Purchase",
        image: "http://t0.gstatic.com/images?q=tbn:ANd9GcSakg2ZE9KoehSQbTgUGxtxThOuY0aWv48gK4F6OpfLgML6PZNc",
        handler: () => {
            alert("Payment Done")
        },
        theme: {color: "#c4242d"}
    };

    let rzp = new window.Razorpay(options);
    rzp.open();
};

const Movie = () => {
    return (
        <>
            <div className="w-full h-full my-16">
                <img className="w-full h-full" src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/medium/spider-man-no-way-home-et00310790-07-12-2021-07-25-42.jpg"/>
                
            </div>
            <button onClick={launchRazorPay} class="m-16 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Book Now
            </button>
        </>
    )
};
export default Movie;