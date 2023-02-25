import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import "../../css/GuestLayout.css";

export default function Guest({ children }) {
    return (
        <div className="h-screen flex">
            <div className="font-ubuntu hidden lg:flex w-full lg:w-1/2 items-end login_img_section">
                <div className="w-full mx-auto px-10 flex-col space-y-6 mb-12">
                    <h1 className="text-black text-5xl">Vital Tracker</h1>
                    <p className="text-black mt-1 text-l text-justify pr-20">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Maiores beatae, sequi temporibus placeat neque
                        velit impedit alias tempora harum adipisci atque tenetur
                        voluptas consectetur veniam error assumenda deserunt?
                        Animi, quasi!
                    </p>
                    <div className="flex justify-center lg:justify-start mt-6">
                        <Link
                            href={route("register")}
                            className="text-l hover:bg-mercury-2 hover:-translate-y-1 transition-all duration-500 bg-mercury-1 text-black text-center mt-4 px-4 py-2 rounded-2xl font-semibold mb-2 w-48"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
                <div className="w-full">
                    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
                        <div>
                            <Link href="/">
                                <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                            </Link>
                        </div>

                        <div className="w-full sm:max-w-md px-6 py-4 sm:rounded-lg">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
