import React, { useContext, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../assets/css/style.css";
import "../../assets/css/flaticon.css";
import { Carousel } from "react-bootstrap";
import "../Home/home.css";
const Home = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<>
			<section className="hero-section">
				<Carousel>
					<Carousel.Item>
						<img
							className="d-block w-100 slider_img"
							src={require("../Home/img/hero/hero-1.jpg")}
							alt="First slide"
						/>
						<Carousel.Caption>
							<div class="col-lg-6">
								<div class="hero-text">
									<h1>Sona A Luxury Hotel</h1>
									<p>
										Here are the best hotel booking sites, including
										recommendations for international travel and for finding
										low-priced hotel rooms.
									</p>
									<a href="#" class="primary-btn">
										Discover Now
									</a>
								</div>
							</div>
						</Carousel.Caption>
					</Carousel.Item>

					<Carousel.Item>
						<img
							className="d-block w-100"
							src={require("../Home/img/hero/hero-2.jpg")}
							alt="Second slide"
						/>
						<Carousel.Caption>
							<div class="col-lg-6">
								<div class="hero-text">
									<h1>Sona A Luxury Hotel</h1>
									<p>
										Here are the best hotel booking sites, including
										recommendations for international travel and for finding
										low-priced hotel rooms.
									</p>
									<a href="#" class="primary-btn">
										Discover Now
									</a>
								</div>
							</div>
						</Carousel.Caption>
					</Carousel.Item>

					<Carousel.Item>
						<img
							className="d-block w-100"
							src={require("../Home/img/hero/hero-3.jpg")}
							alt="Third slide"
						/>
						<Carousel.Caption>
							<div class="col-lg-6">
								<div class="hero-text">
									<h1>Sona A Luxury Hotel</h1>
									<p>
										Here are the best hotel booking sites, including
										recommendations for international travel and for finding
										low-priced hotel rooms.
									</p>
									<a href="/about-us" class="primary-btn">
										Discover Now
									</a>
								</div>
							</div>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</section>

			<section class="aboutus-section spad">
				<div class="container">
					<div class="row">
						<div class="col-lg-6">
							<div class="about-text">
								<div class="section-title">
									<span>About Us</span>
									<h2>
									InterContinental Da Nang<br />
										Hotel
									</h2>
								</div>
								<p class="f-para">
								Sona.com is a top online platform for accommodations, driven by a passion for travel. Each day, we motivate and connect with millions of travelers through 90 localized websites available in 41 languages.
								</p>
								<p class="s-para">
								So, whether you're booking the ideal hotel, vacation rental, resort, apartment, guest house, or even a tree house, we've got everything you need.
								</p>
								<a href="/about-us" class="primary-btn about-btn">
									Read More
								</a>
							</div>
						</div>
						<div class="col-lg-6">
							<div class="about-pic">
								<div class="row">
									<div class="col-sm-6">
										<img
											src={require("../Home/img/about/about-1.jpg")}
											alt=""
										/>
									</div>
									<div class="col-sm-6">
										<img
											src={require("../Home/img/about/about-2.jpg")}
											alt=""
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="services-section spad">
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<div class="section-title">
								<span>What We Do</span>
								<h2>Discover Our Services</h2>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-4 col-sm-6">
							<div class="service-item">
								<i class="flaticon-036-parking"></i>
								<h4>Travel Plan</h4>
								{/* <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna.</p> --> */}
							</div>
						</div>
						<div class="col-lg-4 col-sm-6">
							<div class="service-item">
								<i class="flaticon-033-dinner"></i>
								<h4>Catering Service</h4>
								{/* <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna.</p> --> */}
							</div>
						</div>
						<div class="col-lg-4 col-sm-6">
							<div class="service-item">
								<i class="flaticon-026-bed"></i>
								<h4>Babysitting</h4>
								{/* <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna.</p> --> */}
							</div>
						</div>
						<div class="col-lg-4 col-sm-6">
							<div class="service-item">
								<i class="flaticon-024-towel"></i>
								<h4>Laundry</h4>
								{/* <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna.</p> --> */}
							</div>
						</div>
						<div class="col-lg-4 col-sm-6">
							<div class="service-item">
								<i class="flaticon-044-clock-1"></i>
								<h4>Hire Driver</h4>
								{/* <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna.</p> --> */}
							</div>
						</div>
						<div class="col-lg-4 col-sm-6">
							<div class="service-item">
								<i class="flaticon-012-cocktail"></i>
								<h4>Bar & Drink</h4>
								{/* <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna.</p> --> */}
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="hp-room-section">
				<div class="container-fluid">
					<div class="hp-room-items">
						<div class="row">
						<div class="col-lg-3 col-md-6">
								<div
									class="hp-room-item set-bg"
									style={{
										backgroundImage: `url(${require("../Home/img/room/room-b3.jpg")})`,
									}}
								>
									<div class="hr-text">
										<h3>Standard Room</h3>
										<h2>
											200$<span>/Pernight</span>
										</h2>
										<table>
											<tbody>
												<tr>
													<td class="r-o">Size:</td>
													<td>25 ft</td>
												</tr>
												<tr>
													<td class="r-o">Capacity:</td>
													<td>Max persion 2</td>
												</tr>
												<tr>
													<td class="r-o">Bed:</td>
													<td>1 Double Bed</td>
												</tr>
												<tr>
													<td class="r-o">Services:</td>
													<td>Wifi, Television, Bathroom,...</td>
												</tr>
											</tbody>
										</table>
										<a href="/rooms" class="primary-btn">
											More Details
										</a>
									</div>
								</div>
							</div>
							<div class="col-lg-3 col-md-6">
								<div
									class="hp-room-item set-bg"
									style={{
										backgroundImage: `url(${require("../Home/img/room/room-b4.jpg")})`,
									}}
								>
									<div class="hr-text">
										<h3>Deluxe Room</h3>
										<h2>
											400$<span>/Pernight</span>
										</h2>
										<table>
											<tbody>
												<tr>
													<td class="r-o">Size:</td>
													<td>35 ft</td>
												</tr>
												<tr>
													<td class="r-o">Capacity:</td>
													<td>Max persion 3</td>
												</tr>
												<tr>
													<td class="r-o">Bed:</td>
													<td>1 Queen Bed</td>
												</tr>
												<tr>
													<td class="r-o">Services:</td>
													<td>Wifi, Television, Bathroom,...</td>
												</tr>
											</tbody>
										</table>
										<a href="/rooms" class="primary-btn">
											More Details
										</a>
									</div>
								</div>
							</div>
							<div class="col-lg-3 col-md-6">
								<div
									class="hp-room-item set-bg"
									style={{
										backgroundImage: `url(${require("../Home/img/room/room-b1.jpg")})`,
									}}
								>
									<div class="hr-text">
										<h3>Suite Room</h3>
										<h2>
											500$<span>/Pernight</span>
										</h2>
										<table>
											<tbody>
												<tr>
													<td class="r-o">Size:</td>
													<td>50 ft</td>
												</tr>
												<tr>
													<td class="r-o">Capacity:</td>
													<td>Max persion 4</td>
												</tr>
												<tr>
													<td class="r-o">Bed:</td>
													<td>1 King Bed</td>
												</tr>
												<tr>
													<td class="r-o">Services:</td>
													<td>Wifi, Television, Bathroom,...</td>
												</tr>
											</tbody>
										</table>
										<a href="/rooms" class="primary-btn">
											More Details
										</a>
									</div>
								</div>
							</div>
							<div class="col-lg-3 col-md-6">
								<div
									class="hp-room-item set-bg"
									style={{
										backgroundImage: `url(${require("../Home/img/room/room-b2.jpg")})`,
									}}
								>
									<div class="hr-text">
										<h3>Family Room</h3>
										<h2>
											500$<span>/Pernight</span>
										</h2>
										<table>
											<tbody>
												<tr>
													<td class="r-o">Size:</td>
													<td>45 ft</td>
												</tr>
												<tr>
													<td class="r-o">Capacity:</td>
													<td>Max persion 5</td>
												</tr>
												<tr>
													<td class="r-o">Bed:</td>
													<td>2 King Beds</td>
												</tr>
												<tr>
													<td class="r-o">Services:</td>
													<td>Wifi, Television, Bathroom,...</td>
												</tr>
											</tbody>
										</table>
										<a href="/rooms" class="primary-btn">
											More Details
										</a>
									</div>
								</div>
							</div>
							
						</div>
					</div>
				</div>
			</section>

			<section class="testimonial-section spad">
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<div class="section-title">
								<span>Testimonials</span>
								<h2>What Customers Say?</h2>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-8 offset-lg-2">
							<div class="testimonial-slider owl-carousel">
								<Slider {...settings}>
									<div className="ts-item">
										<p>
											After a construction project took longer than expected, my
											husband, my daughter and I needed a place to stay for a
											few nights. As a Chicago resident, we know a lot about our
											city, neighborhood and the types of housing options
											available and absolutely love our vacation at Sona Hotel.
										</p>
										<div className="ti-author">
											<div className="rating">
												<i className="icon_star"></i>
												<i className="icon_star"></i>
												<i className="icon_star"></i>
												<i className="icon_star"></i>
												<i className="icon_star-half_alt"></i>
											</div>
											<h5> - Alexander Vasquez</h5>
										</div>
										<div
											className="text-center"
											style={{ textAlign: "center" }}
										>
											<img
												className="rounded"
												src={require("../Home/img/testimonial-logo.png")}
												alt="testimonial-logo"
												style={{ display: "block", margin: "0 auto" }}
											/>
										</div>
									</div>
									<div className="ts-item">
										<p>
											After a construction project took longer than expected, my
											husband, my daughter and I needed a place to stay for a
											few nights. As a Chicago resident, we know a lot about our
											city, neighborhood and the types of housing options
											available and absolutely love our vacation at Sona Hotel.
										</p>
										<div className="ti-author">
											<div className="rating">
												<i className="icon_star"></i>
												<i className="icon_star"></i>
												<i className="icon_star"></i>
												<i className="icon_star"></i>
												<i className="icon_star-half_alt"></i>
											</div>
											<h5> - Alexander Vasquez</h5>
										</div>
										<div
											className="text-center"
											style={{ textAlign: "center" }}
										>
											<img
												className="rounded"
												src={require("../Home/img/testimonial-logo.png")}
												alt="testimonial-logo"
												style={{ display: "block", margin: "0 auto" }}
											/>
										</div>
									</div>
								</Slider>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="blog-section spad">
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<div class="section-title">
								<span>Hotel News</span>
								<h2>Our Blog & Event</h2>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-4">
							<div
								class="blog-item set-bg"
								style={{
									backgroundImage: `url(${require("../Home/img/blog/blog-1.jpg")})`,
								}}
							>
								<div class="bi-text">
									<span class="b-tag">Travel Trip</span>
									<h4>
										<a href="#">Tremblant In Canada</a>
									</h4>
									<div class="b-time">
										<i class="icon_clock_alt"></i> 15th April, 2019
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-4">
							<div
								class="blog-item set-bg"
								style={{
									backgroundImage: `url(${require("../Home/img/blog/blog-2.jpg")})`,
								}}
							>
								<div class="bi-text">
									<span class="b-tag">Camping</span>
									<h4>
										<a href="#">Choosing A Static Caravan</a>
									</h4>
									<div class="b-time">
										<i class="icon_clock_alt"></i> 15th April, 2019
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-4">
							<div
								class="blog-item set-bg"
								style={{
									backgroundImage: `url(${require("../Home/img/blog/blog-3.jpg")})`,
								}}
							>
								<div class="bi-text">
									<span class="b-tag">Event</span>
									<h4>
										<a href="#">Copper Canyon</a>
									</h4>
									<div class="b-time">
										<i class="icon_clock_alt"></i> 21th April, 2019
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-8">
							<div
								class="blog-item small-size set-bg"
								style={{
									backgroundImage: `url(${require("../Home/img/blog/blog-wide.jpg")})`,
								}}
							>
								<div class="bi-text">
									<span class="b-tag">Event</span>
									<h4>
										<a href="#">
											Trip To Iqaluit In Nunavut A Canadian Arctic City
										</a>
									</h4>
									<div class="b-time">
										<i class="icon_clock_alt"></i> 08th April, 2019
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-4">
							<div
								class="blog-item small-size set-bg"
								style={{
									backgroundImage: `url(${require("../Home/img/blog/blog-10.jpg")})`,
								}}
							>
								<div class="bi-text">
									<span class="b-tag">Travel</span>
									<h4>
										<a href="#">Traveling To Barcelona</a>
									</h4>
									<div class="b-time">
										<i class="icon_clock_alt"></i> 12th April, 2019
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
