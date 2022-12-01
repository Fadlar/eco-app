import Header from "@/Components/Header";
import Admin from "@/Layouts/Admin";
import React from "react";

export default function Dashboard() {
    return (
        <Admin title={"Dashboard"}>
            <div className="container text-gray-900">
                <Header desc={"Statistic"}>Dashboard</Header>
                <div className="mt-3 leading-relaxed tracking-tighter">
                    Lorem ipsum dolor sit amet.
                </div>
            </div>
        </Admin>
    );
}
