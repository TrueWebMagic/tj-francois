"use client";

interface ProcessStepProps {
    number: string;
    title: string;
    description: string;
}

export function ProcessStep({ number, title, description }: ProcessStepProps) {
    return (
        <div className="flex flex-col items-center text-center mt-10">
            <div className="text-[204px] text-[#F0E6D7] font-black leading-[100%]">{number}</div>
            <div className="flex flex-col gap-[10px]">
                <h1 className="font-bold text-[28px]">{title}</h1>
                <h2 className="text-[16px] text-[#1C1C1C]">{description}</h2>
            </div>
        </div>
    )
}