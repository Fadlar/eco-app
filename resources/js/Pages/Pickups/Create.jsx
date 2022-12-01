import Button from "@/Components/Button";
import Error from "@/Components/Error";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import Textarea from "@/Components/Textarea";
import App from "@/Layouts/App";
import { useForm } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MultiSelect } from "react-multi-select-component";

export default function Create({ trashTypes }) {
    let now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    let nows = now.toISOString().slice(0, 16);
    const { data, setData, post, processing, errors, reset } = useForm({
        trash_type: [],
        weight: "",
        schedule: "",
        address: "",
    });
    const handleChange = (e) => setData(e.target.name, e.target.value);
    const submitHandler = (e) => {
        e.preventDefault();
        post(route("pickups.store"), {
            preserveScroll: true,
            onSuccess: () => [
                reset(),
                toast.success("Data added succesfully."),
            ],
        });
    };

    const [selected, setSelected] = useState([]);
    useEffect(() => {
        const value = Array.from(selected, (option) => option.value);
        setData("trash_type", value);
    }, [selected]);

    return (
        <>
            <form onSubmit={submitHandler} className="space-y-4">
                <div>
                    <div className="grid gap-x-3 lg:grid-cols-2">
                        <div className="mb-3">
                            <Label
                                forInput={`trash_type`}
                                value={`Jenis Sampah`}
                                className="mb-1"
                            />
                            <MultiSelect
                                options={trashTypes}
                                value={selected}
                                onChange={setSelected}
                                labelledBy="Select"
                            />
                            {errors.trash_type && (
                                <Error
                                    message={errors.trash_type}
                                    className={"mt-1"}
                                />
                            )}
                        </div>
                        <div className="mb-3">
                            <Label forInput={`weight`} className="mb-1">
                                Berat
                            </Label>
                            <Input
                                type="number"
                                name={`weight`}
                                id={`weight`}
                                value={data.weight}
                                handleChange={handleChange}
                                className="w-full placeholder:text-sm"
                                placeholder={`Kira kira berat (dalam Kg)`}
                                min="5"
                                required
                            />
                            <span className="text-xs font-normal text-red-500">
                                Minimal berat 5kg
                            </span>
                            {errors.weight && (
                                <Error
                                    message={errors.weight}
                                    className={"mt-1"}
                                />
                            )}
                        </div>
                    </div>
                    <div className="mb-3">
                        <Label
                            forInput={`schedule`}
                            value={`Jadwal Penjemputan`}
                            className="mb-1"
                        />
                        <Input
                            type="datetime-local"
                            name={`schedule`}
                            id={`schedule`}
                            value={data.schedule}
                            handleChange={handleChange}
                            className={`w-full`}
                            min={nows}
                            required
                        />
                        {errors.schedule && (
                            <Error
                                message={errors.schedule}
                                className={"mt-1"}
                            />
                        )}
                    </div>
                    <div className="mb-3">
                        <Label
                            forInput={`Address`}
                            value={`Alamat`}
                            className="mb-1"
                        />
                        <Textarea
                            className={`w-full`}
                            placeholder="Masukan alamat lengkapnya."
                            name={`address`}
                            value={data.address}
                            handleChange={handleChange}
                            required={true}
                        />
                        {errors.address && (
                            <Error
                                message={errors.address}
                                className={"mt-1"}
                            />
                        )}
                    </div>
                    <div className="mt-8 text-center">
                        <button
                            className="rounded-lg bg-rose-500 py-2.5 px-4 text-sm font-semibold tracking-tight text-white"
                            type="submit"
                        >
                            Konfirmasi Penjemputan
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}

Create.layout = (page) => (
    <App.Two children={page} title={`Menjadwalkan Penjemputan`} />
);
