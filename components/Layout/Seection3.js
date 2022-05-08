
const Section3 = () => {
    return (
        <>
            <div className="relative h-screen">
                <div className="bg-orange-300 absolute top-0 left-0 h-screen w-full"></div>
                <img className="absolute top-0 left-0" src="/images/colab_bg.png" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="flex flex-col gap-8">
                        <section className="flex flex-col items-center gap-2">
                            <h1 className="uppercase text-7xl">our collaborate</h1>
                            <img src="/images/divider-2.png" className="object-cover max-w-xs" />
                        </section>

                        <section className="relative">
                            <img src="/images/lineteam.png" />
                            <div className="absolute top-0 left-0 h-full w-full grid grid-cols-4 grid-rows-2">
                                <div className=" flex justify-center items-center h-60">
                                    <img src="/images/adidas-logo-png-2362.png" className="w-40" />
                                </div>

                                <div className=" flex justify-center items-center h-60">
                                    <img src="/images/adidas-logo-png-2362.png" className="w-40" />
                                </div>

                                <div className=" flex justify-center items-center h-60">
                                    <img src="/images/adidas-logo-png-2362.png" className="w-40" />
                                </div>

                                <div className=" flex justify-center items-center h-60">
                                    <img src="/images/adidas-logo-png-2362.png" className="w-40 ml-8" />
                                </div>

                                <div className=" flex justify-center items-center h-60">
                                    <img src="/images/adidas-logo-png-2362.png" className="w-40" />
                                </div>

                                <div className=" flex justify-center items-center h-60">
                                    <img src="/images/adidas-logo-png-2362.png" className="w-40" />
                                </div>

                                <div className=" flex justify-center items-center h-60">
                                    <img src="/images/adidas-logo-png-2362.png" className="w-40" />
                                </div>

                                <div className=" flex justify-center items-center h-60">
                                    <img src="/images/adidas-logo-png-2362.png" className="w-40 ml-8" />
                                </div>


                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section3;