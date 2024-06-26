
function InterestContainer() {
    return (
    <section className="flex w-[75%] max-lg:w-[100%] mx-auto max-lg:mx-0 my-[200px] max-lg:my-0 max-lg:flex-col">
        <div className="w-[65%] max-lg:w-[90%] mx-10 max-lg:mx-6 my-20">
            <h1 className="font-semibold tracking-wide font-[Poppins] mb-2">
            Hello edun.
            </h1>
            <h1 className="w-[80%] max-lg:w-[100%] text-4xl leading-10 tracking-normal font-[Poppins] font-semibold">
            The professional network in education.
            </h1>
            <p className="font-extralight leading-6 text-xs tracking-wide font-[Poppins] mt-2">
            Say hello to edun, the all-in-one educational CRM. Complete with booking systems, timesheet management and e-onboarding.
            </p>
            <button className="h-12 w-full m-auto my-4 justify-center bg-midgroundGrey shadow-sm shadow-highlightGreen hover:shadow-[white] rounded-lg transition ease-in-out delay-100 hover:bg-[#39504b] font-[Poppins] text-lg ">
            Register Interest
            </button>
        </div>
        <div className="block m-auto">
            <video className="rounded-3xl max-lg:w-[90%] max-lg:mx-6" autoPlay loop muted>
                <source src="https://storage.googleapis.com/edun-static/videos/edun_crm_the_professional_network_in_education.mp4" type="video/mp4"></source>
                <source src="https://storage.googleapis.com/edun-static/videos/edun_crm_the_professional_network_in_education.webm" type="video/webm"></source>
            </video>
        </div>
    </section>
    )
}

export default InterestContainer;