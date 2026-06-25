import { useState } from "react"

export default function Budget() {


    return (
        <>
            <div className="flex items-center justify-center mt-10">
                <div className="text-white flex bg-blue-400/30 p-6 border border-blue-400/40">

                    <div className="bg-blue-400/20 flex flex-col p-3 border border-blue-400/30 items-center justify-center">
                        <label className="font-serif text-lg">Total Budget</label>
                        <input className="text-center outline-none font-mono" type="number" placeholder="Enter Budget" />
                    </div>

                    <div className="bg-blue-400/20 flex flex-col p-3 border border-blue-400/30 items-center justify-center">
                        <label className="font-serif text-lg">Spent</label>
                        <input className="text-center outline-none font-mono" type="number" placeholder="00.00" />
                    </div>

                    <div className="bg-blue-400/20 flex flex-col p-3 border border-blue-400/30 items-center justify-center">
                        <label className="font-serif text-lg">Remaining</label>
                        <input className="text-center outline-none font-mono" type="number" placeholder="00.00" />
                    </div>

                </div>
            </div>
        </>
    )
}