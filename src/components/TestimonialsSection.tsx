"use client";

import { Title } from "./Title";

export function TestimonialsSection() {

    return (
        <section className="mt-16">
            <div className="px-8 max-w-80 mx-auto">
                <Title>What Others Have To Say</Title>
            </div>
            <iframe
                src="https://trustugc.com/widget/PLyO2RIg9yZPQLC7KX8AuciBeu93?id=b623680f-6054-46ae-8175-e4f0e58629c1"
                className="w-full mt-10 h-[410px] overflow-hidden"
            ></iframe>
        </section>
    )
}