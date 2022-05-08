

const Section5 = () => {
    return (
        <>
            <div className="relative">
                <img src="/images/join_discord_bg.png" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="flex gap-14">
                        <section>
                            <h1 className="uppercase text-7xl transform -rotate-12">join</h1>
                        </section>
                        <section className="flex flex-col gap-8">
                            <h1 className="text-white uppercase text-4xl">the community and be a part of the team</h1>
                            <h3 className="text-white max-w-md uppercase text-md">join the community on discord to get all the news and latest updates about the project!</h3>
                            <div>
                                <button className='bg-orange-200 text-gray-900 font-bold rounded-full px-6 py-2'>
                                    <h2>Connect wallet</h2>
                                </button>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section5;