//https://preview.themeforest.net/item/sabujcha-matcha-ecommerce-bootstrap4-template/full_screen_preview/22472546?_ga=2.47679719.1588754339.1703252057-2067881420.1687932609
import './App.css';
import logo from './image/1.webp';
import slider from './image/2.webp';
import s1 from './image/3.webp';
import s2 from './image/4.webp';
import l1 from './image/5.webp';
import l2 from './image/6.webp';
import l3 from './image/7.webp';
import l4 from './image/8.webp';
import c1 from './image/9.png';
import n1 from './image/10.webp';
import n2 from './image/11.webp';
import n3 from './image/12.webp';
import n4 from './image/13.webp';
import n5 from './image/14.webp';
import n6 from './image/15.webp';
import n7 from './image/16.webp';
import n8 from './image/17.webp';
import a1 from './image/19.jpg';
import a2 from './image/20.jpg';
import a3 from './image/21.jpg';
import lo1 from './image/22.webp';
import lo2 from './image/23.webp';
import lo3 from './image/24.webp';
import lo4 from './image/25.webp';
import lo5 from './image/26.webp';


import { IoIosArrowDown } from "react-icons/io";
import { TfiShoppingCart } from "react-icons/tfi";
function App() {
  return (
    <div>
      {/* nav start */}
      <div className='contenar'>
        <div className='nav dflex'>
          <div className='mainmenu'>
            <ul className="dflex">
              <li>HOME</li>
              <li>ABOUT</li>
              <li>BLOG</li>
              <li>PAGES</li>
              <li>CONTACT</li>
            </ul>
          </div>
          <div className='logo '>
            <div><img src={logo}></img></div>
          </div>
          <div className='right'>
            <ul className='dflex '>
              <li>USD</li>
              <li><i><IoIosArrowDown></IoIosArrowDown></i></li>
              <li><i><TfiShoppingCart ></TfiShoppingCart ></i></li>
            </ul>
          </div>
        </div>
      </div>
      {/* nav end */}

      {/* slider start */}
      <div className='contenar'>
        <div className='slider'>
          <div><img src={slider}></img></div>
          <h1 className='t-center'>Want to stay healthy<br></br>drink matcha</h1>
          <h5><a>Shop Now</a></h5>
        </div>
      </div>
      {/* slider end */}

      {/* sale start */}
      <div className='contenar'>
        <div className='sale dflex'>
          <div className='summer'>
            <div><img src={s1}></img>
              <h2>-50% Sale</h2>
              <h4>SUMMER VACATION</h4>
            </div>
          </div>
          <div className='winter'>
            <div><img src={s2}></img></div>
            <h2>-20% Sale</h2>
            <h4>WINTER VACATION</h4>
          </div>
        </div>
      </div>
      {/* sale end*/}

      {/* latest start */}
      <div className='contenar l-color'>
        <div className='l-font'>
          <h2 className='t-center t-p'>Latest Products</h2>
          <p className='t-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do<br></br> eiusmod tempor incididunt</p>
          <div className='Products '>
            <div className='box'>
              <img src={l1}></img>
              <h3>Nature close tea</h3>
              <h6>$100.00-<s>$120.00</s></h6>
              <h4>50%</h4>
            </div>
            <div className='box'>
              <img src={l2}></img>
              <h3>Pink Wave Cup</h3>
              <h6>$100.00-<s>$120.00</s></h6>
            </div>
            <div className='box'>
              <img src={l3}></img>
              <h3> Tea and chai</h3>
              <h6>$100.00-<s>$120.00</s></h6>
              <h4>50%</h4>
            </div>
            <div className='box'>
              <img src={l4}></img>
              <h3>Pearly Everlasting</h3>
              <h6>$100.00-<s>$120.00</s></h6>
            </div>
          </div>
        </div>
      </div>

      {/* latest end*/}

      {/* customer start */}

      <div className='contenar'>
        <div className='customer '>
          <div className='t-center '> <img src={c1} ></img></div>
          <div className='t-center'><i>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed do <br></br>eiusmod tempor incididunt ut labore</i></div>
          <div className='t-center '><h5>GREGORY PERKINS</h5></div>
          <div className='t-center t-b'><h6>customer</h6></div>
        </div>
      </div>
      {/* customer end */}

      {/* new product  start*/}
      <div className='contenar l-color'>
        <div className='l-font'>
          <h2 className='t-center t-p'>Latest Products</h2>
          <p className='t-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do<br></br> eiusmod tempor incididunt</p>
          <div className='Products '>
            <div className='box'>
              <img src={n1}></img>
              <h3>BeBe Bloom tea</h3>
              <h6>$100.00-<s>$120.00</s></h6>
              <h4>-30%</h4>
            </div>
            <div className='box'>
              <img src={n2}></img>
              <h3>Que herbal Tea</h3>
              <h6>$100.00-<s>$120.00</s></h6>
              <h4>-60%</h4>
            </div>
            <div className='box'>
              <img src={n3}></img>
              <h3> Society Ice Tea</h3>
              <h6>$100.00-<s>$120.00</s></h6>
            </div>
            <div className='box'>
              <img src={n4}></img>
              <h3>Best Friends Tea</h3>
              <h6>$100.00-<s>$120.00</s></h6>
              <h4>-60%</h4>
            </div>
          </div>
          <div className='Products '>
            <div className='box'>
              <img src={n5}></img>
              <h3>Every spice Tea</h3>
              <h6>$100.00-<s>$120.00</s></h6>
              <h4>-50%</h4>
            </div>
            <div className='box'>
              <img src={n6}></img>
              <h3>Tea and Chai</h3>
              <h6>$100.00-<s>$120.00</s></h6>
            </div>
            <div className='box'>
              <img src={n7}></img>
              <h3> Green Tea Tulsi</h3>
              <h6>$100.00-<s>$120.00</s></h6>
              <h4>-40%</h4>
            </div>
            <div className='box'>
              <img src={n8}></img>
              <h3>Instant Tea Premix</h3>
              <h6>$100.00-<s>$120.00</s></h6>
            </div>
          </div>
        </div>
      </div>

      {/* new product  end*/}

      {/* Newsletter start */}

      <div className='news t-p'>
        <h1 className='t-center'>Join to our Newsletter</h1>
        <div className='t-center'><input type='text' className='t-center' placeholder='Your Email Address*'></input><button>subscribe</button></div>
      </div>
      {/* Newsletter end */}

      {/* Latest News start */}
      <div className='contenar'>
        <div className='latenews'>
          <div className='font'>
            <h2 className='t-center'>Latest News</h2>
          </div>
          <div className='laimg'>
            <div className='box2'>
              <img src={a1}></img>
              <h6><i>14 Sep</i></h6>
              <h3>Lorem ipsum sit ame co.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur<br></br> adipisici elit, sed do eius tempor<br></br> incididunt ut labore et dolore</p>
              <h5>READ MORE</h5>
            </div>
            <div className='box2'>
              <img src={a2}></img>
              <h6><i>20 Dec</i></h6>
              <h3>Lorem ipsum sit ame co.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur<br></br> adipisici elit, sed do eius tempor<br></br> incididunt ut labore et dolore</p>
              <h5>READ MORE</h5>
            </div>
            <div className='box2'>
              <img src={a3}></img>
              <h6><i>18 Aug</i></h6>
              <h3>Lorem ipsum sit ame co.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur<br></br> adipisici elit, sed do eius tempor<br></br> incididunt ut labore et dolore</p>
              <h5>READ MORE</h5>
            </div>
          </div>
        </div>
      </div>
      {/* Latest News end*/}

      {/* logo start*/}
      <div className='contenar'>
        <div className='logos t-center'>
          <img src={lo1}></img>
          <img src={lo2}></img>
          <img src={lo3}></img>
          <img src={lo4}></img>
          <img src={lo5}></img>
        </div>
      </div>
      {/* logo end*/}

      {/* footer start */}
      <div className='contenar foo'>
        <div className='footer'>
          <div className='part1'>
            <h2>My Account</h2>
            <h3>My Account</h3>
            <h3>Order History</h3>
            <h3>WishLis</h3>
            <h3>Newsletter</h3>
            <h3>Order History</h3>
            <h3>International Orders</h3>
          </div>
          <div className='part1'>
            <h2>Information</h2>
            <h3>About Us</h3>
            <h3>Delivery Information</h3>
            <h3>Privacy Policy</h3>
            <h3>Terms & Conditions</h3>
            <h3>Customer Service</h3>
            <h3>Return Policy</h3>
          </div>
          <div className='part1'>
            <h2>Quick Links</h2>
            <h3>Support Center</h3>
            <h3>Term & Conditions</h3>
            <h3>Shipping</h3>
            <h3>Privacy Policy</h3>
            <h3>Help</h3>
            <h3>FAQS</h3>
          </div>
          <div className='part1'>
                <h2>Contact Us</h2>
                <h3>Your address goes here</h3>
                <h3>0123456789</h3>
                <h3>0123456789</h3>
                <h3>demo@example.com</h3>
                <h3>demo@example.com</h3>
          </div>
        </div>
      </div>
      {/* footer start */}

    </div>
  );
}

export default App;
