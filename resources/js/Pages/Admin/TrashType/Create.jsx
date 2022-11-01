import { useForm } from "@inertiajs/inertia-react";
import React from "react";

export default function Create() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
    });

    function submit(e) {
        e.preventDefault();
        post("/trash-type", {
            preserveScroll: true,
            onSuccess: () => [reset()],
        });
    }
    return (
        <div>
            <div>
                <form onSubmit={submit} className="w-1/2">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        className="w-full"
                    />
                    <span className="block text-sm text-red-600">
                        {errors.name && errors.name}
                    </span>
                    <button
                        className="inline py-2 px-5 rounded-lg bg-slate-800 text-white"
                        disabled={processing}
                    >
                        {processing ? "Loading" : "Submit"}
                    </button>
                </form>
            </div>
        </div>
    );
}
