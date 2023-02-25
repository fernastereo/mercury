import { useEffect, useState } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login(props) {
    const { status, canResetPassword } = props;
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const handleOnChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const handleSocialLogin = (event) => {
        event.preventDefault();

        //TODO: Implement social login
        console.log("Social login is not implemented yet");
    };

    const submit = (event) => {
        event.preventDefault();

        post(route("login"));
    };

    return (
        <>
            {props.auth.user ? (
                <GuestLayout>
                    <Head title="Log in" />
                    <div className="flex justify-center text-2xl">
                        <Link
                            href={route("dashboard")}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Return To Dashboard
                        </Link>
                    </div>
                </GuestLayout>
            ) : (
                <GuestLayout>
                    <Head title="Log in" />

                    {status && (
                        <div className="mb-4 font-medium text-sm text-green-600">
                            {status}
                        </div>
                    )}

                    <form
                        className="font-ubuntu bg-white rounded-md shadow-2xl p-5"
                        onSubmit={submit}
                    >
                        <h1 className="text-gray-800 font-bold text-2xl mb-2">
                            Hello Again!
                        </h1>
                        <div className="flex flex-col h-24">
                            <div className="flex-none flex items-center border-2 py-1 px-2 rounded-xl">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                    />
                                </svg>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="pl-2 w-full focus:ring-0 outline-none focus:outline-none border-none shadow-none"
                                    autoComplete="username"
                                    onChange={handleOnChange}
                                    placeholder="Email Address"
                                />
                            </div>
                            <InputError
                                message={errors.email}
                                className="flex-none mt-0 ml-3"
                            />
                        </div>

                        <div className="flex flex-col h-24">
                            <div className="flex-none flex items-center border-2 py-1 px-2 rounded-xl">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-gray-400"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="pl-2 w-full focus:ring-0 outline-none focus:outline-none border-none shadow-none"
                                    autoComplete="current-password"
                                    onChange={handleOnChange}
                                    placeholder="Password"
                                />
                            </div>
                            <InputError
                                message={errors.password}
                                className="mt-0 ml-3"
                            />
                        </div>
                        <div className="block mb-8 flex justify-between">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    value={data.remember}
                                    onChange={handleOnChange}
                                />
                                <span className="ml-2 text-sm text-gray-600">
                                    Remember me
                                </span>
                            </label>
                            <div className="items-center text-right">
                                {canResetPassword && (
                                    <Link
                                        href={route("password.request")}
                                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Forgot your password?
                                    </Link>
                                )}
                            </div>
                        </div>
                        <button
                            className="block w-full text-center bg-mercury-1 mt-3 py-2 rounded-2xl hover:bg-mercury-2 hover:-translate-y-1 transition-all duration-500 text-black font-semibold mb-3"
                            disabled={processing}
                        >
                            Log in
                        </button>

                        <div className="flex items-center justify-center space-x-2 my-4">
                            <span className="h-px w-16 bg-gray-200"></span>
                            <span className="text-gray-400 font-ubuntu">
                                or
                            </span>
                            <span className="h-px w-16 bg-gray-200"></span>
                        </div>
                        <div className="flex justify-center gap-5 w-full mb-4">
                            <button
                                onClick={handleSocialLogin}
                                className="w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-300 hover:border-mercury-1 hover:bg-gray-200 text-sm text-gray-500 p-3 rounded-lg tracking-wide font-medium cursor-pointer hover:-translate-y-1 transition-all duration-500"
                            >
                                <svg
                                    className="w-4 mr-2"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="#EA4335"
                                        d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z"
                                    />
                                    <path
                                        fill="#34A853"
                                        d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z"
                                    />
                                    <path
                                        fill="#4A90E2"
                                        d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z"
                                    />
                                    <path
                                        fill="#FBBC05"
                                        d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z"
                                    />
                                </svg>
                                <span>Google</span>
                            </button>
                            <button
                                onClick={handleSocialLogin}
                                className="w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-300 hover:border-mercury-1 hover:bg-gray-200 text-sm text-gray-500 p-3 rounded-lg tracking-wide font-medium cursor-pointer hover:-translate-y-1 transition-all duration-500"
                            >
                                <svg
                                    className="mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="#4A90E2"
                                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"
                                    />
                                </svg>
                                <span>Facebook</span>
                            </button>
                        </div>
                    </form>
                </GuestLayout>
            )}
        </>
    );
}
