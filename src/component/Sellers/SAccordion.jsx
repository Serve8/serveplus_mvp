import { useState } from "react"
import { FaAngleUp, FaAngleDown, FaRegCheckCircle, FaCheckCircle  } from "react-icons/fa"

const data =
[
    {
        open: false,
        id: 0,
        question: "Customize your store",
        answer: 
            "Choose a theme and add your logo, color and images to reflect our brand.",
        secondAns: "Customise theme"
    },
    {
        open: false,
        id: 1,
        question: "Add your product categories",
        answer: 
            "Write a description, add photos and set pricing for the products you plan to sell",
        secondAns: "Add products"
    },
    {
        open: false,
        id: 2,
        question: "Link your social media accounts to your store",
        answer: 
            "Boost your website traffic by linking your account to your instagram, X, tiktok and other social media handles you have ",
        secondAns: "Link your account"
    },
    {
        open: false,
        id: 3,
        question: "Store settings",
        answer: 
            "Your temporary store name is currently My Shop. The store name appears in your admin and online store",
        secondAns:  "settings"
    },
]


const SAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = index => {
        if (activeIndex === index) {
            setActiveIndex(null)
        }else {
            setActiveIndex(index)
            console.log(activeIndex)
        }
    }

  return (
    <div className="">
        <ul className="flex flex-col gap-2 md:items-center justify-center">
            {data.map((item, index) => 
            <li key={index} className="mb-2 p-4 border-b border-b-black w-full md:w-[350px] lg:w-[500px]">
                <div className="font-bold font-sora text-xs md:text-sm flex justify-between items-center">
                    <div className="flex gap-x-2 items-center">
                        {activeIndex === index ? <FaRegCheckCircle /> : <FaCheckCircle />}
                        <h1>{item.question}</h1>
                    </div>
                    <button onClick={() => toggle(index)}>
                        {activeIndex === index ? <FaAngleUp /> : <FaAngleDown />}
                    </button>
                </div>
                <div
                    className={`transition-all ease-in-out duration-500 text-black font-sora text-xs md:text-sm max-h-0 overflow-hidden ${
                    activeIndex === index ? 'max-h-screen p-4' : 'max-h-0 p-0'
                    }`}
                >
                    <p>{item.answer}</p>
                    <button className="font-sora font-semibold p-4 bg-gray-700 text-white rounded-md mt-4">{item.secondAns}</button>
                </div>
            </li>    
            )}
            <li className="mb-2 p-4 md:border-b border-b-black w-[270px] md:w-[350px] lg:w-[500px]">
                <div className="font-bold font-sora text-xs md:text-sm flex gap-x-2 items-center">
                    <FaCheckCircle />
                    <h1>Launch your store</h1>
                </div>
            </li>    
        </ul>
    </div>
    
   
  )
}




export default SAccordion