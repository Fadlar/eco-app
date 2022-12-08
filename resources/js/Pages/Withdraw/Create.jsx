import Button from "@/Components/Button";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import App from "@/Layouts/App";
import { useForm } from "@inertiajs/inertia-react";
import React from "react";

export default function Create({ auth }) {
    const allPoint =
        auth.user.user_detail === null
            ? 0
            : auth.user.user_detail.points === null
            ? 0
            : auth.user.user_detail.points;
    const { data, setData, post, processing, errors } = useForm({
        jumlah_uang: "",
        nama_bank: "",
        no_rekening: "",
    });
    const uang = data.jumlah_uang;
    const perpoin = (uang.replace(".", "") / 5000) * 100;
    const handleChange = (e) => setData(e.target.name, e.target.value);
    const submitHandler = (e) => {
        e.preventDefault();
        post("/withdrawals", {
            preserveScroll: true,
        });
    };

    const handlePoint = (e) => {
        setData(e.target.name, e.target.value);
    };

    return (
        <>
            {errors.poin && (
                <div className="mb-3 flex items-center justify-between rounded-lg bg-rose-500 px-5 py-3 font-semibold text-white">
                    Poin tidak mencukupi.
                </div>
            )}
            <div className="mb-3 flex items-center justify-between rounded-lg bg-white px-5 py-3">
                <span className="font-semibold text-gray-700">Poin anda:</span>
                <span className="text-gray-700">{allPoint} Poin</span>
            </div>
            <div className="rounded-lg bg-white px-5 py-3">
                <form onSubmit={submitHandler}>
                    <div className="mb-3">
                        <Label
                            forInput={"jumlah_poin"}
                            value={"Poin dibutuhkan"}
                        />
                        <Input
                            name={"jumlah_point"}
                            id="jumlah_poin"
                            value={perpoin}
                            className="mt-2 w-full"
                            disabled
                            required={true}
                        />
                    </div>
                    <div className="mb-3">
                        <Label
                            forInput={"jumlah_uang"}
                            value={"Jumlah Penarikan"}
                        />
                        <Input
                            type="number"
                            name={"jumlah_uang"}
                            id="jumlah_uang"
                            value={data.jumlah_uang}
                            handleChange={handlePoint}
                            className="mt-2 w-full"
                            min="100000"
                            max="1000000"
                            required={true}
                        />
                        <span className="text-sm text-yellow-500">
                            Minimal Penarikan 100.000 <br />
                            Maksimal Penarikan 1.000.000
                        </span>
                    </div>
                    <div className="mb-3">
                        <Label forInput={"nama_bank"} value={"Nama Bank"} />
                        <Input
                            name={"nama_bank"}
                            id="nama_bank"
                            value={data.nama_bank}
                            handleChange={handleChange}
                            className="mt-2 w-full"
                            required={true}
                        />
                    </div>
                    <div className="mb-3">
                        <Label
                            forInput={"no_rekening"}
                            value={"Nomor Rekening"}
                        />
                        <Input
                            name={"no_rekening"}
                            id="no_rekening"
                            value={data.no_rekening}
                            handleChange={handleChange}
                            className="mt-2 w-full"
                            required={true}
                        />
                    </div>
                    <div className="py-3 text-right">
                        <Button processing={processing}>Simpan</Button>
                    </div>
                </form>
            </div>
        </>
    );
}

Create.layout = (page) => (
    <App.Two children={page} title="Ajukan Penarikan" back={"/withdrawals"} />
);
