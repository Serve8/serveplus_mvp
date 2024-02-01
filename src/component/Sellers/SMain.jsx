//import { useState } from "react"
import SAccordion from "./SAccordion"

const SMain = () => {


  return (
    <section className="flex items-center justify-center">
      <div className="bg-gray-300 p-8 rounded-md">
        <div className="flex flex-col gap-y-2">
         <h1 className="font-sora text-xl md:text-2xl font-bold">Set up your online store with a few clicks</h1>
         <p className="font-sora text-sm md:text-base font-bold">Use this personalized guide to get your store up and running</p>
         <p className="font-sora text-sm md:text-base font-bold rounded-md p-4 border border-black w-[40%] md:w-[40%]">0 of 4 completed</p> {/* update dynamically */}
        </div>
        <div>
          <SAccordion />
        </div>
      </div>

    </section>
  )
}

export default SMain