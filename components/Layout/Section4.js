import { FaPlus } from 'react-icons/fa'

const Section4 = () => {
    return (
        <>
            <div className="relative">
                <img src="/images/Faq_bg.png" />
                <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="flex gap-14">
                        <section className="flex flex-col gap-4">
                            <h1 className="uppercase text-8xl">faq</h1>
                            <img src="/images/divider-3.png" />
                        </section>
                        <div className="flex flex-col gap-4">
                            <section className="relative h-max">
                                <img src="/images/faq-line.png" />
                                <h1 className="absolute top-0 left-8 uppercase">bi-weekly & monthly eth giveaway</h1>
                                <div className='absolute top-0 right-0'>
                                    <FaPlus className='text-xl' />
                                </div>
                            </section>

                            <section className="relative h-max">
                                <img src="/images/faq-line.png" />
                                <h1 className="absolute top-0 left-8 uppercase">bi-weekly & monthly eth giveaway</h1>
                                <div className='absolute top-0 right-0'>
                                    <FaPlus className='text-xl' />
                                </div>
                            </section>

                            <section className="relative h-max">
                                <img src="/images/faq-line.png" />
                                <h1 className="absolute top-0 left-8 uppercase">bi-weekly & monthly eth giveaway</h1>
                                <div className='absolute top-0 right-0'>
                                    <FaPlus className='text-xl' />
                                </div>
                            </section>

                            <section className="relative h-max">
                                <img src="/images/faq-line.png" />
                                <h1 className="absolute top-0 left-8 uppercase">bi-weekly & monthly eth giveaway</h1>
                                <div className='absolute top-0 right-0'>
                                    <FaPlus className='text-xl' />
                                </div>
                            </section>

                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Section4;