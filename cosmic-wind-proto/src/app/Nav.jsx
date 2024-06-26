
function Nav() {

    return (
        <div className="flex w-full justify-between flex-row max-md:flex-col">
            <i className="bg-white max-md:m-auto">
                <svg className="w-[200px] h-12 mt-4" xmins="http://www.w3.org/2000/svg" viewBox="0 0 145.25 42.088">
                    <g data-name="Group 25" fill="#ffffff"><path data-name="Path 10717" d="M66.418 11a10.019 10.019 0 014.532 1.1 8.358 8.358 0 013.343 2.84 9.8 9.8 0 011.477 3.876 25.359 25.359 0 01.328 4.84H59.999a9.394 9.394 0 001.579 5.36 5.288 5.288 0 004.573 2.02 5.912 5.912 0 004.613-1.907 6.429 6.429 0 001.4-2.564h3.63a7.645 7.645 0 01-.954 2.7 9.592 9.592 0 01-1.815 2.43 8.6 8.6 0 01-4.167 2.212 12.647 12.647 0 01-3.015.328 9.25 9.25 0 01-6.952-2.979q-2.85-2.988-2.85-8.362a12.624 12.624 0 012.871-8.593A9.472 9.472 0 0166.418 11zm5.886 9.721a9.564 9.564 0 00-1.046-3.835 5.361 5.361 0 00-5.065-2.666 5.615 5.615 0 00-4.267 1.836 6.934 6.934 0 00-1.825 4.666zm10.66 2.009a10.887 10.887 0 001.5 5.906 5.246 5.246 0 004.8 2.38 5.054 5.054 0 004.214-2.2 10.412 10.412 0 001.651-6.327q0-4.163-1.7-6.163a5.31 5.31 0 00-4.2-2 5.55 5.55 0 00-4.529 2.13q-1.736 2.132-1.736 6.274zm5.558-11.628a7.814 7.814 0 014.225 1.066 9.923 9.923 0 012.235 2.153V3.227h3.548v30.229h-3.32V30.4a7.987 7.987 0 01-3.055 2.933 8.746 8.746 0 01-4.04.9 8.181 8.181 0 01-6.357-3.086 12.067 12.067 0 01-2.687-8.213 14.178 14.178 0 012.451-8.316 8.023 8.023 0 017.003-3.516zm19.154.39v14.581a6.148 6.148 0 00.533 2.748 3.721 3.721 0 003.671 1.969 5.189 5.189 0 005.25-3.445 13.669 13.669 0 00.759-5.065V11.492h3.695v21.964h-3.487l.041-3.24a7.446 7.446 0 01-1.784 2.112 7.851 7.851 0 01-5.127 1.723q-4.7 0-6.4-3.138a9.345 9.345 0 01-.923-4.491v-14.93zm19.667 0h3.507v3.117a9.836 9.836 0 013.3-2.769 8.8 8.8 0 013.876-.841q4.676 0 6.316 3.261a11.579 11.579 0 01.9 5.106v14.09h-3.745V19.613a7.5 7.5 0 00-.595-3.24 3.606 3.606 0 00-3.568-2.051 7.266 7.266 0 00-2.153.267 5.545 5.545 0 00-2.666 1.8 5.433 5.433 0 00-1.2 2.246 15.116 15.116 0 00-.277 3.312v11.509h-3.692z"></path><path data-name="Path 1643" d="M20.039 6.786S8.83 11.501 8.439 27.335s18.484 19.657 25.96 7.868c4.4-6.943-.746-23.253 9.937-26.355 0 0-8.317-10.711-22.74-8.563S-8.279 14.943 5.15 36.111c0 0-6.834-25.528 14.889-29.325z"></path></g>
                </svg>
            </i>
            <ul className="flex flex-row max-md:flex-wrap max-md:mx-auto max-md:justify-center">
                <a href=""><li className="hover:shadow-[white] mt-8 mx-2 font-[Poppins] text-sm text-nowrap max-md:text-xs bg-midgroundGrey rounded-lg px-4 h-8 max-md:h-6 py-1 shadow-sm shadow-highlightGreen transition ease-in-out delay-100 hover:bg-[#39504b] max-md:w-[90%]">Request Demo</li></a>
                <a href=""><li className="hover:shadow-[white] mt-8 mx-2 font-[Poppins] text-sm text-nowrap max-md:text-xs bg-midgroundGrey rounded-lg px-4 h-8 max-md:h-6 py-1 shadow-sm shadow-highlightGreen transition ease-in-out delay-100 hover:bg-[#39504b] max-md:w-[90%]">Testimonials</li></a>
                <a href=""><li className="hover:shadow-[white] mt-8 mx-2 font-[Poppins] text-sm text-nowrap max-md:text-xs bg-midgroundGrey rounded-lg px-4 h-8 max-md:h-6 py-1 shadow-sm shadow-highlightGreen transition ease-in-out delay-100 hover:bg-[#39504b] max-md:w-[90%]">LinkedIn</li></a>
                <a href=""><li className="hover:shadow-[white] mt-8 mx-2 font-[Poppins] text-sm text-nowrap max-md:text-xs bg-midgroundGrey rounded-lg px-4 h-8 max-md:h-6 py-1 shadow-sm shadow-highlightGreen transition ease-in-out delay-100 hover:bg-[#39504b] max-md:w-[90%]">Contact Us</li></a>
                <a href=""><li className="mt-8 mx-2 max-md:justify-self-centerer px-4 py-1 max-md:py-0 h-8 font-[Poppins] text-sm text-nowrap max-md:text-xs">Log In Here</li></a>
            </ul>
        </div>
    )
}

export default Nav;