import { useState } from "react"
const categories = [
    { 
        id: 1,
        value: "Shoe"
    },
    { 
        id: 2,
        value: "Shoe"
    },
    { 
        id: 3,
        value: "Shoe"
    },
    { 
        id: 4,
        value: "Shoe"
    },
    { 
        id: 5,
        value: "Shoe"
    },
    { 
        id: 7,
        value: "Shoe"
    },
    { 
        id: 8,
        value: "Shoe"
    },
]

const SAddProduct = () => {
    const [productDetails, setProductDetails] = useState({
        title: "",
        desc: "",
        category: "",
        media: ""
    })

    const catOptions = categories.map(cat => (
        <option key={cat.id} value={cat.value}>
            {cat.value}
        </option>
    ))
    

    const canSave = [productDetails.title, productDetails.category, productDetails.desc, productDetails.media].every(Boolean);

  return (
    <section className="h-auto">
        <div className="px-4">
            <div>
                <h1 className="font-sora text-2xl md:text-4xl font-bold">Add Product</h1>
                <div>
                    <form onSubmit={e => e.preventDefault()} className="flex flex-col gap-y-2">

                        <div className="flex flex-col gap-2">
                            <label htmlFor="productTitle" className="font-sora font-semibold text-base md:text-xl">Title</label>
                            <input 
                            type="text"
                            placeholder="Louis Vuitton Sneakers"
                            name="productTitle"
                            required
                            value={productDetails.title}
                            onChange={e => setProductDetails(e.target.value = productDetails.title)}
                            className="font-sora px-4 py-4 rounded-md w-[80%]"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                        <label htmlFor="productDesc" className="font-sora font-semibold text-base md:text-xl">Description</label>
                        <textarea 
                            placeholder="Winter wear for men"
                            name="productDesc"
                            required
                            value={productDetails.desc}
                            onChange={e => setProductDetails(e.target.value = productDetails.desc)}
                            className="font-sora px-4 py-4 rounded-md w-[80%] h-[40vh]"
                        />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="productCategory" className="font-sora font-semibold text-base md:text-xl">Title</label>
                            <select value={productDetails.category} onChange={e => setProductDetails(e.target.value = productDetails.category)}
                            className="font-sora px-4 py-4 rounded-md w-[80%]"
                            >
                                <option value="" className="font-sora px-4 py-4 rounded-md w-[80%]"></option>
                                {catOptions}
                            </select>
                        </div>
                        
                    
                        <div className="flex flex-col gap-2">
                            <label htmlFor="productMedia" className="font-sora font-semibold text-base md:text-xl">Media</label>  
                            <input
                            type="file"
                            accept="image/*,.pdf"
                            placeholder="click to upload your image or document"
                            required
                            value={productDetails.media}
                            onChange={e => setProductDetails(e.target.value = productDetails.media)}
                            className="font-sora px-4 py-4 rounded-md w-[80%]"
                            />
                        </div>

                        <button disabled={!canSave}
                        className="p-2 font-sora text-wite bg-gray-700 font-bold"
                        >Submit</button>

                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SAddProduct