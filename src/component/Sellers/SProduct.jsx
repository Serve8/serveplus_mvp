import { useEffect, useState } from "react"
import shoe from "../../assets/Img/shoe-removebg-preview.png"
import bag from "../../assets/Img/bag-removebg-preview.png"
import shirt from "../../assets/Img/shirt-removebg-preview.png"
import { Link } from "react-router-dom"


const SProduct = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const imageSources = [
      shoe, bag, shirt
    ];
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === imageSources.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000);
  
      return () => clearInterval(intervalId);
    }, [currentImageIndex, imageSources.length]);

  return (
    <section className="md:flex items-center justify-center">
        <div className="flex flex-col-reverse md:flex-row justify-around gap-4 items-center bg-white h-[50vh] px-4 md:px-2 md:w-[80%] rounded-md">
            <div>
                <h1 className="font-sora font-bold text-xl md:text-2xl mb-2">
                    Add your products
                </h1>
                <p className="font-sora text-sm md:text-base mb-2">Start by stocking your store with products that your customers will love</p>
                <button className="font-sora font-bold text-sm md:text-base p-4 rounded-md bg-gray-700 text-white mt-2"><Link to="/seller-home/add-product">Add a product</Link></button>
            </div>
            <div>
                <img src={imageSources[currentImageIndex]} alt="product image" loading="lazy"></img>
            </div>
        </div>
    </section>
  )
}

export default SProduct