'use client';

import React, { useActionState } from 'react';
import { formSubmit } from "@/actions/registration_form";

export default function Page() {
    // const form ={
    //     name:"",
    //     email:"",
    //     phoneNumber:"",
    //     password:""
    // }

    const [state, action] = useActionState(formSubmit, {
        error: false,
        success: false,
    });
    // console.log("user_page line 18", state, action);
    return (
        <div>
            <form
                action={action}
                className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-center text-indigo-600">User Registration Form</h2>
                {state.errors ? (
                    <h1 className="text-2xl text-red-600 font-medium text-center ">
                       Server Error !
                    </h1>
                ) : null}
                {state.success ? (
                    <h1 className="text-2xl text-emerald-400 text-center ">
                        Addition was successful !
                    </h1>
                ) : null}
                <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full text-black p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        placeholder="Your Name"
                    />
                    {state?.errors?.name && (
                        <div>
                            <p className="text-red-600">{state.errors.name}</p>
                        </div>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full p-2 mt-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        placeholder="Your Email"
                    />
                    {state?.errors?.email && (
                        <div>
                            <p className="text-red-600">{state.errors.email}</p>
                        </div>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Phone</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        className="w-full p-2 mt-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        placeholder="Your Phone number"
                    />
                    {state?.errors?.phoneNumber && (
                        <div>
                            <p className="text-red-600">{state.errors.phoneNumber}</p>
                        </div>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="w-full p-2 mt-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        placeholder="Your Password"
                    />
                    {state?.errors?.password && (
                        <div>
                            <p className="text-red-600">{state.errors.password}</p>
                        </div>
                    )}
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
