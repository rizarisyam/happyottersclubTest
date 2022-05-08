

const Section2 = () => {
    return (
        <>
            <div className="relative h-screen">
                <div className="bg-black absolute top-0 left-0 h-full w-full"></div>
                <img src="/images/Roadmap_bg.png" className="absolute top-0 left-0 h-full w-full object-fill" />

                <div className="absolute top-0 left-0 h-full w-full flex">
                    <section className="h-full flex items-end">
                        <img src="/images/og_otter.png" />
                    </section>
                    <section className="flex flex-col justify-center items-center w-full">
                        <div>
                            <h1 className="uppercase text-7xl">roadmap</h1>
                        </div>
                        <div id="timeline-container" className="border px-4 relative w-full h-full">
                            <div id="timeline" className="border-l-2 border-black h-full">
                                <div id="content" className="max-w-sm">
                                    <div id="circle" className="w-8 h-8 absolute top-0 left-0">
                                        <img src="/images/timedot.png" />
                                    </div>
                                    <h1 className="uppercase ml-8">pre-mint</h1>
                                </div>
                                <div id="content" className="max-w-max absolute top-14 left-2 ">
                                    <div className="flex items-center gap-6">
                                        <div id="circle" className="w-4 h-4 bg-black rounded-full">
                                        </div>
                                        <h1 className="uppercase">full scale marketing</h1>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div id="circle" className="w-4 h-4 bg-black rounded-full">
                                        </div>
                                        <h1 className="uppercase">wl giveaway on discord & twitter</h1>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div id="circle" className="w-4 h-4 bg-black rounded-full">
                                        </div>
                                        <h1 className="uppercase">building more collaborations with brands to provide more exlusivity to holders</h1>
                                    </div>
                                </div>

                                <div id="content" className="max-w-sm absolute top-44 left-0 border flex items-center gap-4">
                                    <div id="circle" className="w-8 h-8">
                                        <img src="/images/timedot.png" />
                                    </div>
                                    <h1 className="uppercase">post mint</h1>
                                </div>
                                <div id="content" className="max-w-max absolute top-60 left-2 ">
                                    <div className="flex items-center gap-6">
                                        <div id="circle" className="w-4 h-4 bg-black rounded-full">
                                        </div>
                                        <h1 className="uppercase">collection reveal 5 days after mint closes</h1>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div id="circle" className="w-4 h-4 bg-black rounded-full">
                                        </div>
                                        <h1 className="uppercase">welcome to the otters kingdome (all perks will be unlocked at the stage)</h1>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div id="circle" className="w-4 h-4 bg-black rounded-full">
                                        </div>
                                        <h1 className="uppercase">private discord channel for all holders</h1>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div id="circle" className="w-4 h-4 bg-black rounded-full">
                                        </div>
                                        <h1 className="uppercase">community wallet 30% of minting sales</h1>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div id="circle" className="w-4 h-4 bg-black rounded-full">
                                        </div>
                                        <h1 className="uppercase">charity donation</h1>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div id="circle" className="w-4 h-4 bg-black rounded-full">
                                        </div>
                                        <h1 className="uppercase">naming your happy otter</h1>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div id="circle" className="w-4 h-4 bg-black rounded-full">
                                        </div>
                                        <h1 className="uppercase">merch design for giveaway to 100 holders</h1>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div id="circle" className="w-4 h-4 bg-black rounded-full">
                                        </div>
                                        <h1 className="uppercase">team expansion</h1>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div id="circle" className="w-4 h-4 bg-black rounded-full">
                                        </div>
                                        <h1 className="uppercase">investing in start up phase</h1>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div id="circle" className="w-4 h-4 bg-black rounded-full">
                                        </div>
                                        <h1 className="uppercase">app development phase</h1>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Section2;