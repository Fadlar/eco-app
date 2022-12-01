import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white px-16 text-gray-900 shadow">
                <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
                    <a className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 rounded-full bg-green-700 p-2 text-white"
                            width={28}
                            height={28}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#fff"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx={7} cy={17} r={2} />
                            <circle cx={17} cy={17} r={2} />
                            <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
                            <line x1={3} y1={9} x2={7} y2={9} />
                        </svg>
                        <span className="ml-3 text-xl">ECO APP</span>
                    </a>
                    <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
                        <a href="#" className="mr-5 hover:text-gray-700">
                            About us
                        </a>
                        <a href="#" className="mr-5 hover:text-gray-700">
                            Services
                        </a>
                        <a href="#" className="mr-5 hover:text-gray-700">
                            How it works
                        </a>
                        <a href="#" className="mr-5 hover:text-gray-700">
                            Contact Us
                        </a>
                    </nav>
                    <Link
                        href="/login"
                        className="inline-flex items-center rounded-md border-0 bg-green-700 py-1.5 px-4 text-base text-white focus:outline-none hover:bg-green-700/80 md:mt-0"
                    >
                        Login
                        {/* <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="ml-1 h-4 w-4"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg> */}
                    </Link>
                </div>
            </header>
            <section className="bg-green-700 text-gray-100">
                <div className="relative mx-auto w-3/4 py-24">
                    <div className="flex flex-col justify-center rounded-sm p-6 text-center lg:max-w-lg lg:text-left xl:max-w-2xl">
                        <h1 className="mt-6 mb-8 text-5xl font-bold leading-loose sm:mb-12 sm:text-6xl">
                            Manage your Waste and Earn Rewards
                        </h1>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-center sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <a
                                rel="noopener noreferrer"
                                href="#"
                                className="rounded bg-rose-500 px-6 py-2 text-lg font-semibold text-white"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                    <div className="absolute top-24 -right-36 w-2/3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="m-0 w-full"
                            viewBox="100 0 920 515"
                        >
                            {/* Tong sampah */}
                            <path
                                id="bca7d782-7e31-494e-97b0-f49b8df7894d-45"
                                data-name="Path 8"
                                d="M923.90791,706.92328h-172.216l-.033-.965-8.223-235.18h188.727Zm-170.284-2h168.352l8.117-232.145h-184.587Z"
                                transform="translate(-139.84793 -192.45672)"
                                fill="#fff"
                            />
                            <g
                                id="e7d5632f-8461-4dcf-9cd9-df8e3f64d5e2"
                                data-name="Group 1"
                            >
                                <rect
                                    id="ad932c98-7027-4b28-8e73-a76d8a4136e0"
                                    data-name="Rectangle 17"
                                    x="639.82597"
                                    y="321.89657"
                                    width="13.099"
                                    height="162.097"
                                    className="fill-rose-500"
                                />
                                <rect
                                    id="ae1e5d8b-7977-4a56-a24c-fbb057f76b38"
                                    data-name="Rectangle 18"
                                    x="691.40202"
                                    y="321.89657"
                                    width="13.099"
                                    height="162.097"
                                    className="fill-yellow-500"
                                />
                                <rect
                                    id="bffa0855-fc38-45cc-9e39-6daa1d3e4103"
                                    data-name="Rectangle 19"
                                    x="742.97801"
                                    y="321.89657"
                                    width="13.099"
                                    height="162.097"
                                    className="fill-rose-500"
                                />
                            </g>
                            {/* Tutup Sampah */}
                            <path
                                d="M1041.59738,539.83884l-.8457-.53418L826.83762,404.12156l18.55566-29.36182.84571.53418,213.91308,135.18262Zm-212-136.33935,211.377,133.57959,16.418-25.97949-211.376-133.58106Z"
                                transform="translate(-139.84793 -192.45672)"
                                fill="#fff"
                            />
                            <path
                                id="b31113e7-cae2-4653-b248-af5e4acb0a6c-46"
                                data-name="Path 10"
                                d="M989.9499,393.22629a38.459,38.459,0,0,0-58.62,38.07l10.2,6.446a30.344,30.344,0,1,1,28.98,18.321l10.2,6.446a38.459,38.459,0,0,0,9.249-69.283Z"
                                transform="translate(-139.84793 -192.45672)"
                                fill="#fff"
                            />
                            {/* Orang */}
                            <g
                                id="b91459ce-423d-4e92-a857-d0ba85dc07c7"
                                data-name="Group 6"
                            >
                                <path
                                    id="bc369f15-2cd9-428d-9eec-3a8fd8cc1bba-47"
                                    data-name="Path 111"
                                    d="M536.88489,691.89628h-14.564l-6.932-56.174h21.5Z"
                                    transform="translate(-139.84793 -192.45672)"
                                    fill="#feb8b8"
                                />
                                <path
                                    id="fafca8b8-1a63-4513-a3fa-e64917847011-48"
                                    data-name="Path 112"
                                    d="M494.23393,705.41828h45.771v-17.684h-28.332a17.439,17.439,0,0,0-17.439,17.439h0Z"
                                    transform="translate(-139.84793 -192.45672)"
                                    fill="#2f2e41"
                                />
                                <path
                                    id="a38ea43e-f1b1-406e-84c8-61e7480f01b4-49"
                                    data-name="Path 113"
                                    d="M531.766,604.85129l10.046,10.545,45.452-33.727-14.826-15.563Z"
                                    transform="translate(-139.84793 -192.45672)"
                                    fill="#feb8b8"
                                />
                                <path
                                    id="b5ba90e2-8a51-4a77-95c4-5b486c8770ec-50"
                                    data-name="Path 114"
                                    d="M552.16123,620.2275l-19.54908-20.51237-12.80321,12.202,31.582,33.1382.17738-.169a17.4414,17.4414,0,0,0,.59292-24.65874Z"
                                    transform="translate(-139.84793 -192.45672)"
                                    fill="#2f2e41"
                                />
                                <path
                                    id="b1536285-e66e-494f-8c4f-a2304265e4c3-51"
                                    data-name="Path 115"
                                    d="M430.39593,450.95329a11.94591,11.94591,0,0,1,5.715-17.4l57.179-145.727,22.288,13.345-63.518,139.8a12.01,12.01,0,0,1-21.664,9.982Z"
                                    transform="translate(-139.84793 -192.45672)"
                                    fill="#feb8b8"
                                />
                                <path
                                    id="acd6249e-4699-4411-813c-091b3a750afe-52"
                                    data-name="Path 116"
                                    d="M647.42792,461.3983a11.94507,11.94507,0,0,1-10.727-14.85l-84.354-131.869,23.891-10.2,75.836,133.523a12.01,12.01,0,0,1-4.646,23.4Z"
                                    transform="translate(-139.84793 -192.45672)"
                                    fill="#feb8b8"
                                />
                                <path
                                    id="ece4d731-f277-435f-bbc1-e3b70679d22f-53"
                                    data-name="Path 117"
                                    d="M493.8529,436.36129l14.931,221.913,35.682-3.148,7.34595-163.722,19.94,70.314,43.028,3.148-17.031-139Z"
                                    transform="translate(-139.84793 -192.45672)"
                                    fill="#2f2e41"
                                />
                                <path
                                    id="b91f5bf0-a8c5-41a2-a26e-8e2fd84207c6-54"
                                    data-name="Path 118"
                                    d="M578.04889,551.2243l-6.3,10.495-44.073,30.434,31.484,16.792s60.869-33.583,55.622-44.078Z"
                                    transform="translate(-139.84793 -192.45672)"
                                    fill="#2f2e41"
                                />
                                <path
                                    id="b0b7866d-f3ba-460a-97cc-8103175b89de-55"
                                    data-name="Path 119"
                                    d="M462.60693,346.57728l12.421-35a62.4941,62.4941,0,0,1,32.332-35.668h0a89.42706,89.42706,0,0,1,52.484-2.873l4.52,1.122a87.36364,87.36364,0,0,1,33.128,16c7.654,6.034,14.54,13.674,15.153,21.892a.24435.24435,0,0,0,.015.051c2.12,9.292,3.169,57.567,3.169,57.567h-18.7l2.958,65.067-.239-.471s-107.856,20.411-107.856,9.916v-67.168l-2.211-24.32Z"
                                    transform="translate(-139.84793 -192.45672)"
                                    className="fill-yellow-500"
                                />
                                <circle
                                    id="bd3b9138-8795-4826-98b2-48d72249760b"
                                    data-name="Ellipse 12"
                                    cx="423.432"
                                    cy="41.59257"
                                    r="29.889"
                                    fill="#feb8b8"
                                />
                                <path
                                    id="e83e2647-99b5-4c80-ac3e-9e5d1f9bc81d-56"
                                    data-name="Path 120"
                                    d="M567.757,220.64529l23.208.93c2.92-.009,6.108-.112,8.332-2,3.35-2.849,2.789-8.225.995-12.241-5-11.182-16.153-15.188-28.4-14.859s-25.08,4.48-31.675,14.8-8.377,23.352-5.893,35.344a38.534,38.534,0,0,1,31.508-21.97Z"
                                    transform="translate(-139.84793 -192.45672)"
                                    fill="#2f2e41"
                                />
                            </g>
                            {/* sampah */}
                            <g
                                id="ff061cc6-72bd-494d-9c36-32e4a4020cd7"
                                data-name="Group 4"
                            >
                                <path
                                    id="bc404282-8d4f-43f7-bc12-02f97785eba1-57"
                                    data-name="Path 81"
                                    d="M705.57123,513.00138l-84.00157-58.87289a3.60743,3.60743,0,0,1-.882-5.01481L686.619,355.0409a3.60743,3.60743,0,0,1,5.01481-.882l84.00156,58.87289a3.60742,3.60742,0,0,1,.882,5.01481l-65.92963,94.07033A3.60742,3.60742,0,0,1,705.57123,513.00138Z"
                                    transform="translate(-139.84793 -192.45672)"
                                    className="fill-rose-500"
                                />
                                <path
                                    id="ae4af9f3-88ec-4cab-9b9e-a4fc234f7062-58"
                                    data-name="Path 82"
                                    d="M724.46214,449.12032l-49.29069-34.54561a5.30063,5.30063,0,1,1,6.08441-8.6814l49.29069,34.54561a5.30063,5.30063,0,0,1-6.08441,8.6814Z"
                                    transform="translate(-139.84793 -192.45672)"
                                    fill="#fff"
                                />
                                <path
                                    id="fe48f3fd-992f-41c2-af3b-c30882e26a16-59"
                                    data-name="Path 83"
                                    d="M713.14975,465.26118l-49.29069-34.54561a5.30063,5.30063,0,1,1,6.0844-8.6814l49.29069,34.54561a5.30063,5.30063,0,0,1-6.0844,8.6814Z"
                                    transform="translate(-139.84793 -192.45672)"
                                    fill="#fff"
                                />
                                <path
                                    id="e216638f-22ba-49ea-a46c-300c78c4e875-60"
                                    data-name="Path 84"
                                    d="M701.71568,481.57565,652.425,447.03a5.30063,5.30063,0,1,1,6.0844-8.68141l49.29069,34.54561a5.30063,5.30063,0,0,1-6.0844,8.68141Z"
                                    transform="translate(-139.84793 -192.45672)"
                                    fill="#fff"
                                />
                                <path
                                    id="ee43e3d8-5f22-4b53-a964-043fec166479-61"
                                    data-name="Path 85"
                                    d="M724.32359,417.19028l-19.09171-13.38052a5.30063,5.30063,0,1,1,6.0844-8.6814L730.408,408.50887a5.30063,5.30063,0,0,1-6.08441,8.68141Z"
                                    transform="translate(-139.84793 -192.45672)"
                                    fill="#fff"
                                />
                            </g>
                        </svg>
                    </div>
                </div>
                <div className="mx-auto w-3/4 rounded-t-2xl bg-white py-10 px-10 text-center text-gray-900">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum aliquid velit non? Ab alias expedita, molestias quod
                    est aspernatur commodi tempore nulla quis perferendis eius.
                    Consequuntur rerum perferendis tempore facilis!
                </div>
            </section>
            <div className="min-h-screen">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. In eos
                facilis tempore minus facere odio unde architecto, porro nam
                repellendus nihil temporibus dolores sint soluta, rem quia
                deleniti. Delectus, rerum.
            </div>
        </div>
    );
}
