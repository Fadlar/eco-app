import React from "react";
import Button from "./Button";
import Error from "./Error";
import Input from "./Input";
import Label from "./Label";
import Textarea from "./Textarea";

export default function FormTrashType({
    data,
    errors,
    processing,
    submitHandler,
    handleChange,
    submit = "Save",
}) {
    return (
        <>
            <form onSubmit={submitHandler} className="w-full">
                <div className="mb-2">
                    <Label
                        forInput={`name`}
                        value={`Nama`}
                        className={`mb-2`}
                    />
                    <Input
                        className={`w-full text-gray-800`}
                        name={`name`}
                        id={`name`}
                        value={data.name}
                        handleChange={handleChange}
                        required
                    />
                    {errors.name && (
                        <Error message={errors.name} className={"mt-1"} />
                    )}
                </div>
                <div className="mb-4">
                    <Label
                        forInput={"icon"}
                        value={"Icon"}
                        className={"mb-2"}
                    />
                    <Textarea
                        className={"w-full text-gray-800"}
                        id={"icon"}
                        name={"icon"}
                        value={data.icon}
                        handleChange={handleChange}
                    />
                    {errors.icon && (
                        <Error message={errors.icon} className={"mt-1"} />
                    )}
                </div>
                <Button processing={processing}>
                    {processing ? "Loading" : submit}
                </Button>
            </form>
        </>
    );
}
