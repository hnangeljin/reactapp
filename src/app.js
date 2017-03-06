import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import { Posts } from './components/containers';
import store from './stores';
import { Provider } from 'react-redux';


class App extends Component {

  render(){
    return(
      <Provider store={ store.configureStore() }>
        <div>
          <div id="page-wrapper">


      				<div id="header-wrapper" className="wrapper">


      					<div id="header">


      							<div id="logo">
      								<h1><a href="/">Three Point Lines</a></h1>
      								<p>Blog Site</p>
      							</div>


      							<nav id="nav">
      								<ul>
      									<li className="current"><a href="/">Home</a></li>
      									<li>
      										<a href="#">Dropdown</a>
      										<ul>
      											<li><a href="#">Lorem ipsum</a></li>
      											<li><a href="#">Magna veroeros</a></li>
      											<li><a href="#">Etiam nisl</a></li>
      											<li>
      												<a href="#">Sed consequat</a>
      												<ul>
      													<li><a href="#">Lorem dolor</a></li>
      													<li><a href="#">Amet consequat</a></li>
      													<li><a href="#">Magna phasellus</a></li>
      													<li><a href="#">Etiam nisl</a></li>
      													<li><a href="#">Sed feugiat</a></li>
      												</ul>
      											</li>
      											<li><a href="#">Nisl tempus</a></li>
      										</ul>
      									</li>
      									<li><a href="left-sidebar.html">Left Sidebar</a></li>
      									<li><a href="right-sidebar.html">Right Sidebar</a></li>
      									<li><a href="no-sidebar.html">Write for Us</a></li>
                        <li><a href="left-sidebar.html">Contact</a></li>
      									<li><a href="right-sidebar.html">About</a></li>




      								</ul>
      							</nav>

      					</div>
      				</div>


      				<div id="intro-wrapper" className="wrapper style1">
      					<div className="title">The Introduction</div>
      					<section id="intro" className="container">
      						<p className="style1">So in case you were wondering what this is all about ...</p>
      						<p className="style2">
      							Escape Velocity is a free responsive<br className="mobile-hide" />
      							site template by <a href="http://html5up.net" className="nobr">HTML5 UP</a>
      						</p>
      						<p className="style3">It's <strong>responsive</strong>, built on <strong>HTML5</strong> and <strong>CSS3</strong>, and released for
      						free under the <a href="http://html5up.net/license">Creative Commons Attribution 3.0 license</a>, so use it for any of
      						your personal or commercial projects &ndash; just be sure to credit us!</p>
      						<ul className="actions">
      							<li><a href="#" className="button style3 big">Proceed</a></li>
      						</ul>
      					</section>
      				</div>


      				<div className="wrapper style2">
      					<div className="title">The Details</div>
      					<div id="main" className="container">


      							<a href="#" className="/image featured">
      								<img src="/images/pic01.jpg" alt="" />
      							</a>


      							<section id="features">
      								<header className="style1">
      									<h2>Dolor consequat feugiat amet veroeros</h2>
      									<p>Feugiat dolor nullam orci pretium phasellus justo</p>
      								</header>
      								<div className="feature-list">
      									<div className="row">
      										<div className="6u 12u(mobile)">
      											<section>
      												<h3 className="icon fa-comment">Mattis velit diam vulputate</h3>
      												<p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate. Eget mattis at, laoreet vel velit lorem.</p>
      											</section>
      										</div>
      										<div className="6u 12u(mobile)">
      											<section>
      												<h3 className="icon fa-refresh">Lorem ipsum dolor sit veroeros</h3>
      												<p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate. Eget mattis at, laoreet vel velit lorem.</p>
      											</section>
      										</div>
      									</div>
      									<div className="row">
      										<div className="6u 12u(mobile)">
      											<section>
      												<h3 className="icon fa-picture-o">Pretium phasellus justo lorem</h3>
      												<p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate. Eget mattis at, laoreet vel velit lorem.</p>
      											</section>
      										</div>
      										<div className="6u 12u(mobile)">
      											<section>
      												<h3 className="icon fa-cog">Tempus sed pretium orci</h3>
      												<p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate. Eget mattis at, laoreet vel velit lorem.</p>
      											</section>
      										</div>
      									</div>
      									<div className="row">
      										<div className="6u 12u(mobile)">
      											<section>
      												<h3 className="icon fa-wrench">Aliquam consequat et feugiat</h3>
      												<p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate. Eget mattis at, laoreet vel velit lorem.</p>
      											</section>
      										</div>
      										<div className="6u 12u(mobile)">
      											<section>
      												<h3 className="icon fa-check">Dolore laoreet aliquam mattis</h3>
      												<p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate. Eget mattis at, laoreet vel velit lorem.</p>
      											</section>
      										</div>
      									</div>
      								</div>
      								<ul className="actions actions-centered">
      									<li><a href="#" className="button style1 big">Get Started</a></li>
      									<li><a href="#" className="button style2 big">More Info</a></li>
      								</ul>
      							</section>

      					</div>
      				</div>


      				<div className="wrapper style3">
      					<div className="title">The Endorsements</div>
      					<div id="highlights" className="container">
      						<div className="row 150%">
      							<div className="4u 12u(mobile)">
      								<section className="highlight">
      									<a href="#" className="/image featured"><img src="/images/pic02.jpg" alt="" /></a>
      									<h3><a href="#">Aliquam diam consequat</a></h3>
      									<p>Eget mattis at, laoreet vel amet sed velit aliquam diam ante, dolor aliquet sit amet vulputate mattis amet laoreet lorem.</p>
      									<ul className="actions">
      										<li><a href="#" className="button style1">Learn More</a></li>
      									</ul>
      								</section>
      							</div>
      							<div className="4u 12u(mobile)">
      								<section className="highlight">
      									<a href="#" className="/image featured"><img src="/images/pic03.jpg" alt="" /></a>
      									<h3><a href="#">Nisl adipiscing sed lorem</a></h3>
      									<p>Eget mattis at, laoreet vel amet sed velit aliquam diam ante, dolor aliquet sit amet vulputate mattis amet laoreet lorem.</p>
      									<ul className="actions">
      										<li><a href="#" className="button style1">Learn More</a></li>
      									</ul>
      								</section>
      							</div>
      							<div className="4u 12u(mobile)">
      								<section className="highlight">
      									<a href="#" className="/image featured"><img src="/images/pic04.jpg" alt="" /></a>
      									<h3><a href="#">Mattis tempus lorem</a></h3>
      									<p>Eget mattis at, laoreet vel amet sed velit aliquam diam ante, dolor aliquet sit amet vulputate mattis amet laoreet lorem.</p>
      									<ul className="actions">
      										<li><a href="#" className="button style1">Learn More</a></li>
      									</ul>
      								</section>
      							</div>
      						</div>
      					</div>
      				</div>


      				<div id="footer-wrapper" className="wrapper">
      					<div className="title">The Rest Of It</div>
      					<div id="footer" className="container">
      						<header className="style1">
      							<h2>Ipsum sapien elementum portitor?</h2>
      							<p>
      								Sed turpis tortor, tincidunt sed ornare in metus porttitor mollis nunc in aliquet.<br />
      								Nam pharetra laoreet imperdiet volutpat etiam consequat feugiat.
      							</p>
      						</header>
      						<hr />
      						<div className="row 150%">
      							<div className="6u 12u(mobile)">


      									<section>
      										<form method="post" action="#">
      											<div className="row 50%">
      												<div className="6u 12u(mobile)">
      													<input type="text" name="name" id="contact-name" placeholder="Name" />
      												</div>
      												<div className="6u 12u(mobile)">
      													<input type="text" name="email" id="contact-email" placeholder="Email" />
      												</div>
      											</div>
      											<div className="row 50%">
      												<div className="12u">
      													<textarea name="message" id="contact-message" placeholder="Message" rows="4"></textarea>
      												</div>
      											</div>
      											<div className="row">
      												<div className="12u">
      													<ul className="actions">
      														<li><input type="submit" className="style1" value="Send" /></li>
      														<li><input type="reset" className="style2" value="Reset" /></li>
      													</ul>
      												</div>
      											</div>
      										</form>
      									</section>

      							</div>
      							<div className="6u 12u(mobile)">


      									<section className="feature-list small">
      										<div className="row">
      											<div className="6u 12u(mobile)">
      												<section>
      													<h3 className="icon fa-home">Mailing Address</h3>
      													<p>
      														Untitled Corporation<br />
      														1234 Somewhere Rd #987<br />
      														Nashville, TN 00000-0000
      													</p>
      												</section>
      											</div>
      											<div className="6u 12u(mobile)">
      												<section>
      													<h3 className="icon fa-comment">Social</h3>
      													<p>
      														<a href="#">@untitled-corp</a><br />
      														<a href="#">linkedin.com/untitled</a><br />
      														<a href="#">facebook.com/untitled</a>
      													</p>
      												</section>
      											</div>
      										</div>
      										<div className="row">
      											<div className="6u 12u(mobile)">
      												<section>
      													<h3 className="icon fa-envelope">Email</h3>
      													<p>
      														<a href="#">info@untitled.tld</a>
      													</p>
      												</section>
      											</div>
      											<div className="6u 12u(mobile)">
      												<section>
      													<h3 className="icon fa-phone">Phone</h3>
      													<p>
      														(000) 555-0000
      													</p>
      												</section>
      											</div>
      										</div>
      									</section>

      							</div>
      						</div>
      						<hr />
      					</div>
      					<div id="copyright">
      						<ul>
      							<li>&copy; Untitled</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
      						</ul>
      					</div>
      				</div>

      		</div>
        </div>
      </Provider>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
