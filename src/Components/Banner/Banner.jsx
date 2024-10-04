const Banner = () => {
    return (
        <div className=" w-full h-[260px] lg:h-[600px] ">
            
            <div className="hero w-full h-[260px] lg:h-[600px] rounded-2xl"
            style={{
                backgroundImage: "url(https://i.ibb.co.com/YPYMjpM/banner.png)",
            }}>
            <div className=""></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="lg:max-w-[933px]">
                <h1 className="mb-5 lg:text-4xl text-lg text-white font-bold">Discover an exceptional cooking class tailored for you!</h1>
                <p className="mb-5 lg:text-lg text-sm">
                Our recipes are crafted to be simple yet delicious, perfect for cooks of all skill levels. Enjoy fresh, wholesome meals made with love and ease.
                    
                </p>
                <div className="space-x-4">
                    <button className="btn rounded-full bg-[#0BE58A] border border-none text-sm">Explore Now</button>
                    <button className="btn rounded-full bg-transparent border-2 text-white border-[#0BE58A] text-sm">Our Feedback</button>
                </div>
                </div>
            </div>
            </div>




        </div>
    );
};

export default Banner;