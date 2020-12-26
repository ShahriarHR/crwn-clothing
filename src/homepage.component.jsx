const HomePage = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="w-full flex flex-wrap justify-between">
                <div className="my-2 min-w-1/3 h-60 flex-auto flex justify-center items-center border-2 border-black ml-2 mr-4 first:mr-2 last:ml-2">
                    <div className="h-24 px-6 flex flex-col justify-center items-center border-2 border-black">
                        <h1 className="font-bold text-xl mb-1.5 text-gray-600 uppercase">Hats</h1>
                        <span className="font-extralight text-base uppercase">Shop Now</span>
                    </div>
                </div>
                <div className="my-2 min-w-1/3 h-60 flex-auto flex justify-center items-center border-2 border-black ml-2 mr-4 first:mr-2 last:ml-2">
                    <div className="h-24 px-6 flex flex-col justify-center items-center border-2 border-black">
                        <h1 className="font-bold text-xl mb-1.5 text-gray-600 uppercase">Jackets</h1>
                        <span className="font-extralight text-base uppercase">Shop Now</span>
                    </div>
                </div>
                <div className="my-2 min-w-1/3 h-60 flex-auto flex justify-center items-center border-2 border-black ml-2 mr-4 first:mr-2 last:ml-2">
                    <div className="h-24 px-6 flex flex-col justify-center items-center border-2 border-black">
                        <h1 className="font-bold text-xl mb-1.5 text-gray-600 uppercase">Sneakers</h1>
                        <span className="font-extralight text-base uppercase">Shop Now</span>
                    </div>
                </div>
                <div className="my-2 min-w-1/3 h-60 flex-auto flex justify-center items-center border-2 border-black ml-2 mr-4 first:mr-2 last:ml-2">
                    <div className="h-24 px-6 flex flex-col justify-center items-center border-2 border-black">
                        <h1 className="font-bold text-xl mb-1.5 text-gray-600 uppercase">Mans</h1>
                        <span className="font-extralight text-base uppercase">Shop Now</span>
                    </div>
                </div>
                <div className="my-2 min-w-1/3 h-60 flex-auto flex justify-center items-center border-2 border-black ml-2 mr-4 first:mr-2 last:ml-2">
                    <div className="h-24 px-6 flex flex-col justify-center items-center border-2 border-black">
                        <h1 className="font-bold text-xl mb-1.5 text-gray-600 uppercase">Womens</h1>
                        <span className="font-extralight text-base uppercase">Shop Now</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;