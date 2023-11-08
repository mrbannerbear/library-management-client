/* eslint-disable react/no-unescaped-entities */
const Banner = () => {
    return (
        <div className="hero min-h-screen
        " style={{backgroundImage: `url(https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=1798&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3De.jpg)`}}>
        <div className="w-full h-full bg-gray-500/20 bg-gradient-to-b from-transparent to-black/70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Find Your Favorite Books</h1>
            <p className="mb-5">
            Explore a world of knowledge and imagination. 
        Dive into our extensive collection of books, 
        spanning various genres and topics. 
        Whether you're looking for a thrilling adventure 
        or a profound exploration of human history, 
        we have something for every reader.
            </p>
            <button className="btn1">Get Started</button>
          </div>
        </div>
      </div>
    )
};

export default Banner;