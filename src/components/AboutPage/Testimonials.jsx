export default function Testimonials() {
    return (
        <section className="relative isolate overflow-hidden bg-gray-900 px-6 py-10 lg:px-8">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-500),transparent)] opacity-10" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-900 shadow-xl ring-1 shadow-indigo-500/5 ring-white/5 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <img
                    alt="Image"
                    src="https://tailwindcss.com/plus-assets/img/logos/workcation-logo-indigo-400.svg"
                    className="mx-auto h-12 cursor-pointer"
                />
                <figure className="mt-10">
                    <blockquote className="text-center text-xl/8 font-semibold text-white sm:text-2xl/9">
                        <p>
                            “We help companies build strong online presence with professional websites, branding, and marketing services designed for growth.”
                        </p>
                    </blockquote>
                    <figcaption className="mt-10">
                        <img
                            alt="Image"
                            src="https://nurdev.netlify.app/profile-image.jpg"
                            className="mx-auto size-10 rounded-full"
                        />
                        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                            <div className="font-semibold text-white">Abdun Nur</div>
                            <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-white">
                                <circle r={1} cx={1} cy={1} />
                            </svg>
                            <div className="text-gray-400">CEO of Online-Bazzar</div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
    )
}
