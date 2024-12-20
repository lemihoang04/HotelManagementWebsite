import React, { useContext, useEffect, useState } from "react";
import room1 from "../img/room/room-1.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
	useHistory,
	useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import Booking_Modal from "../Room/Booking_Modal";
import { toast } from "react-toastify";
import { UserContext } from "../../Context/UserProvider";
import { ChangeRoomAva, CreatePayment } from "../../services/apiService";
const RoomDetail = () => {
	const { user, getformValue } = useContext(UserContext);
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(() => {
		const tomorrow = new Date();
		tomorrow.setDate(tomorrow.getDate() + 1); 
		return tomorrow;
	});
	const [formValue, setFormValue] = useState({
		UserID: user.account.UserID,
		userName: user.account.Name,
		Days: "",
		RoomPrice: "",
		TotalPrice: "",
		CheckInDate: "",
		CheckOutDate: "",
		methodPay: "",
		RoomID: "",
		BookingID: "",
		BookingStatus: "Confirmed",
		PaymentStatus: "",
		Availability: "",
	});
	const location = useLocation();
	const history = useHistory();
	const roomData = location.state || "";
	const [isOpenModalBooking, setIsOpenModalBooking] = useState(false);
	const toggleBookingModal = () => {
		setIsOpenModalBooking(!isOpenModalBooking);
	};
	const HandleBooking = () => {
		const currentDate = new Date();
		currentDate.setHours(0, 0, 0, 0);
		if (user && user.isAuthenticated !== true) {
			history.push("/login");
		} else {
			if (startDate < currentDate ) {
				toast.error("Start date cannot be earlier than today");
			}
			else if (startDate >= endDate) {
				toast.error("Please select a valid date");
			} else {
				setIsOpenModalBooking(true);
			}
		}
	};
	const handlePaymentMethodChange = (methodPay) => {
		setFormValue({
			...formValue,
			methodPay: methodPay,
		});
	};
	const HandlePayment = async (form) => {
		if (formValue.methodPay === "CashPayment") {
			const updatedFormValue = {
				...formValue,
				BookingID: form,
				PaymentStatus: "Pending",
				Availability: "1",
			};
			setFormValue(updatedFormValue);
			let response = await CreatePayment(updatedFormValue);
			let roomChange = await ChangeRoomAva(updatedFormValue);
		} else if (formValue.methodPay === "PaymentOnline") {
			const updatedFormValue = {
				...formValue,
				BookingID: form,
				PaymentStatus: "Completed",
			};
			setFormValue(updatedFormValue);
			getformValue(formValue);
		}
	};

	useEffect(() => {
		if (roomData !== "") {
			const days = Math.ceil((endDate - startDate) / (1000 * 3600 * 24));
			const roomPrice = roomData.Price;
			const totalPrice = roomPrice * days;

			const formattedCheckInDate = startDate.toISOString().split("T")[0];
			const formattedCheckOutDate = endDate.toISOString().split("T")[0];
			setFormValue({
				...formValue,
				Days: days,
				RoomPrice: roomPrice,
				TotalPrice: totalPrice,
				CheckInDate: formattedCheckInDate,
				CheckOutDate: formattedCheckOutDate,
				RoomID: roomData.RoomID,
			});
		} else {
			history.push("/rooms");
		}
	}, [startDate, endDate, roomData]);
	return (
		<>
			<Booking_Modal
				isOpen={isOpenModalBooking}
				toggle={toggleBookingModal}
				formValue={formValue}
				HandlePayment={HandlePayment}
				handlePaymentMethod={handlePaymentMethodChange}
			/>
			<div className="breadcrumb-section">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="breadcrumb-text">
								<h2>Our Rooms</h2>
								<div className="bt-option">
									<a href="./">Home</a>
									<span>Room Details</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section className="room-details-section spad">
				<div className="container p-4">
					<div className="row">
						<div className="col-lg-12">
						<h1 className="ml-2 mb-3">{roomData.RoomType}</h1>
							<div className="room-details-item">
								<img src={`http://127.0.0.1:5000/load/${roomData.Image}`} alt="Room Details" />
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-8">
							<div className="room-details-item">
								<div className="rd-text">
									<div className="rd-title">
										<h3>Room Detail</h3>
										<div className="rdt-right">
											<div className="rating">
												<i className="icon_star"></i>
												<i className="icon_star"></i>
												<i className="icon_star"></i>
												<i className="icon_star"></i>
												<i className="icon_star-half_alt"></i>
											</div>
											{/* <a href="#">Booking Now</a> */}
										</div>
									</div>
									<h2>
									${roomData.Price}<span>/Per night</span>
									</h2>
									<table>
										<tbody>
											<tr>
												<td className="r-o"><strong>Room number:</strong></td>
												<td>{roomData.RoomID}</td>
											</tr>
											<tr>
												<td className="r-o"><strong>Size:</strong></td>
												<td>
													{roomData.RoomType === "Family Room" && "45 ft"}
													{roomData.RoomType === "Deluxe Room" && "35 ft"}
													{roomData.RoomType === "Suite Room" && "50 ft"}
													{roomData.RoomType === "Standard Room" && "25 ft"}
												</td>
											</tr>
											<tr>
												<td className="r-o"><strong>Capacity:</strong></td>
												<td>
													{roomData.RoomType === "Family Room" && "Max person 5"}
													{roomData.RoomType === "Deluxe Room" && "Max person 3"}
													{roomData.RoomType === "Suite Room" && "Max person 4"}
													{roomData.RoomType === "Standard Room" && "Max person 2"}
												</td>
											</tr>
											<tr>
												<td className="r-o"><strong>Bed:</strong></td>
												<td>
													{roomData.RoomType === "Family Room" && "2 King Beds"}
													{roomData.RoomType === "Deluxe Room" && "1 Queen Bed"}
													{roomData.RoomType === "Suite Room" && "1 King Bed"}
													{roomData.RoomType === "Standard Room" && "1 Double Bed"}
												</td>
											</tr>
											<tr>
												<td className="r-o"><strong>Features:</strong></td>
												<td>{roomData.Features}</td>
											</tr>
										</tbody>
									</table>

									<p className="f-para">
										Motorhome or Trailer that is the question for you. Here are
										some of the advantages and disadvantages of both, so you
										will be confident when purchasing an RV. When comparing Rvs,
										a motorhome or a travel trailer, should you buy a motorhome
										or fifth wheeler? The advantages and disadvantages of both
										are studied so that you can make your choice wisely when
										purchasing an RV. Possessing a motorhome or fifth wheel is
										an achievement of a lifetime. It can be similar to
										sojourning with your residence as you search the various
										sites of our great land, America.
									</p>
									<p>
										The two commonly known recreational vehicle classes are the
										motorized and towable. Towable rvs are the travel trailers
										and the fifth wheel. The rv travel trailer or fifth wheel
										has the attraction of getting towed by a pickup or a car,
										thus giving the adaptability of possessing transportation
										for you when you are parked at your campsite.
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="room-booking">
								<h3>Your Reservation</h3>

								<div className="form-group">
									<p>Check-in time is 12:00 PM, checkout time is 11:59 AM. If you leave behind any items, please contact the receptionist.</p>
									<label htmlFor="date-in">Check In:</label>
									<div className="input-group">
										<DatePicker
											selected={startDate}
											onChange={(date) => setStartDate(date)}
											selectsStart
											startDate={startDate}
											endDate={endDate}
											dateFormat="dd/MM/yyyy"
											className="form-control"
										/>
										<div className="input-group-append ">
											<span className="input-group-text">
												<i className="fas fa-calendar"></i>
											</span>
										</div>
									</div>
								</div>

								<div className="form-group">
									<label htmlFor="date-in">Check Out:</label>
									<div className="input-group">
										<DatePicker
											selected={endDate}
											onChange={(date) => {
												if (date) {
													const updatedDate = new Date(date);
													updatedDate.setHours(0, 0, 0, 0); 
													setEndDate(updatedDate);
												}
											}}
											selectsEnd
											startDate={endDate}
											endDate={startDate}
											dateFormat="dd/MM/yyyy"
											className="form-control"
										/>
										<div className="input-group-append">
											<span className="input-group-text">
												<i className="fas fa-calendar"></i>
											</span>
										</div>
									</div>
								</div>
											
									<button className="btn btn-primary w-100" onClick={HandleBooking}>
										Check Now
									</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default RoomDetail;
