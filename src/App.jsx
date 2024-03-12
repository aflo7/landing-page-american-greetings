import './App.css';

export default function App() {
  return (
    <>
      <main>
        <div className="top-nav">
          <input className='search-box' type='text' placeholder='Search' />
          <div>Sign In</div>
          <div>Join</div>
          <div>Member Benefits</div>
        </div>
        <div className="logo-wrapper">
          <img
            className="the-logo"
            src="https://ak.imgag.com/imgag/product/siteassets/general/3501190/image.png"
          />
        </div>
        <nav>
          <div>Ecards</div>
          <div>Smashups</div>
          <div>Createacard</div>
          <div>Digital Gifts</div>
          <div>Occassions</div>
          <div>Apps</div>
          <div>Artists</div>
        </nav>
        {/* <div className="the-img"></div> */}
        <img className='the-img' src='https://ak.imgag.com/imgag/product/siteassets/general/3553993/image.jpg' />
        <div className="celebrate-text">
          Celebrate Meaningful Connections With Our Greeting Cards, Ecards and
          More
        </div>
      </main>
    </>
  );
}
