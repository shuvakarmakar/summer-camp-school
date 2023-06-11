import img1 from '../../../assets/Extra/guitar.jpg'
import img2 from '../../../assets/Extra/Piano.jpg'
import img3 from '../../../assets/Extra/Drums.jpg'


const ExtraSection = () => {
    return (
        <div>
            <section className="py-12 bg-cyan-500">
                <div className="container mx-auto">
                    <h2 className="text-3xl text-white font-semibold mb-6">Musical Instrument Learning School</h2>
                    <p className="text-white mb-8">Join our summer program and embark on a musical journey to learn various instruments!</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="p-4 bg-white rounded-lg shadow-lg">
                            <img src={img1} alt="Guitar" className="w-full h-40 object-cover rounded-t-lg" />
                            <div className="p-4">
                                <h3 className="text-xl text-gray-800 font-semibold mb-2">Guitar Basics</h3>
                                <p className="text-gray-600">Learn the fundamentals of playing the guitar, from chords to melodies.</p>
                            </div>
                        </div>
                        <div className="p-4 bg-white rounded-lg shadow-lg">
                            <img src={img2} alt="Piano" className="w-full h-40 object-cover rounded-t-lg" />
                            <div className="p-4">
                                <h3 className="text-xl text-gray-800 font-semibold mb-2">Piano Masterclass</h3>
                                <p className="text-gray-600">Master the art of playing the piano and captivate audiences with your melodies.</p>
                            </div>
                        </div>
                        <div className="p-4 bg-white rounded-lg shadow-lg">
                            <img src={img3} alt="Drums" className="w-full h-40 object-cover rounded-t-lg" />
                            <div className="p-4">
                                <h3 className="text-xl text-gray-800 font-semibold mb-2">Drum Beats Workshop</h3>
                                <p className="text-gray-600">Discover the rhythmic world of drums and create captivating beats.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ExtraSection;