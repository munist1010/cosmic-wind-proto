
function InterestContainer() {
    return (
    <section className="flex w-[75%] mx-auto my-[200px]">
        <div className="w-[65%] mx-10 my-20">
            <h1 className="font-semibold tracking-wide font-[Poppins] mb-2">
            Hello edun.
            </h1>
            <h1 className="w-[80%] text-4xl leading-10 tracking-normal font-[Poppins] font-semibold">
            The professional network in education.
            </h1>
            <p className="font-extralight leading-6 text-xs tracking-wide font-[Poppins] mt-2">
            Say hello to edun, the all-in-one educational CRM. Complete with booking systems, timesheet management and e-onboarding.
            </p>
            <button className="h-12 w-full m-auto my-4 justify-center bg-midgroundGrey shadow-sm shadow-highlightGreen hover:shadow-[white] rounded-lg transition ease-in-out delay-100 hover:bg-[#39504b] font-[Poppins] text-lg ">
            Register Interest
            </button>
        </div>
        <div>
            <video className="rounded-3xl" autoPlay loop muted>
            <source src="https://storage.googleapis.com/edun-static/videos/edun_crm_the_professional_network_in_education.mp4" type="video/mp4"></source>
            <source src="https://storage.googleapis.com/edun-static/videos/edun_crm_the_professional_network_in_education.webm" type="video/webm"></source>
            </video>
        </div>
    </section>
    )
}

export default InterestContainer;