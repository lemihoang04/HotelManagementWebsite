import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { LoginAdmin } from "../../services/userService";
import blogImage from "../../assets/images/blog-1.jpg";
import { UserContext } from "../../Context/UserProvider";
const Login_Admin = () => {
	const { loginAdmin } = useContext(UserContext);
	const history = useHistory();
	const [formValues, setFormValues] = useState({
		Email: "",
		Password: "",
	});
	const defaultObjValidInput = {
		isValidLogin: true,
		isValidPass: true,
	};
	const [objValidInput, setObjValidInput] = useState(defaultObjValidInput);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormValues({
			...formValues,
			[name]: value,
		});
	};
	const handleLogin = async (e) => {
		e.preventDefault();
		setObjValidInput(defaultObjValidInput);

		if (!formValues.Email && !formValues.Password) {
			setObjValidInput({
				...defaultObjValidInput,
				isValidLogin: false,
				isValidPass: false,
			});
			toast.error("Please fill in your Email and Password");
			return;
		}

		if (!formValues.Email) {
			setObjValidInput({ ...defaultObjValidInput, isValidLogin: false });
			toast.error("Please fill in your Email");
			return;
		}

		if (!formValues.Password) {
			setObjValidInput({ ...defaultObjValidInput, isValidPass: false });
			toast.error("Please fill in your Password");
			return;
		}

		try {
			const response = await LoginAdmin(formValues);
			if (response && response.errCode === 0) {
				toast.success("Success Login");
				let data = {
					isAuthenticated: true,
					account: response.user,
					isLoading: false,
				};
				loginAdmin(data);
				history.push("/admin");
			} else {
				toast.error(response.error);
			}
		} catch (e) {
			console.log(e);
			toast.error("Login failed. Please try again.");
		}
	};
	return (
		<div className="login-page">
			<div className="wrapper">
				<div className="container main">
					<div className="row">
						<div className="col-md-6 mt-5 side-image">
							<img src={blogImage} alt="" />;
						</div>
						<div className="col-md-6 right">
							<div className="input-box">
								<header>Login</header>
								<form onSubmit={handleLogin}>
									<div className="input-field">
										<input
											type="text"
											className={
												objValidInput.isValidLogin
													? "form-control noshadow input"
													: "is-invalid form-control input"
											}
											id="Email"
											name="Email"
											value={formValues.Email}
											onChange={handleInputChange}
											required
											autoComplete="off"
										/>
										<label htmlFor="Email">Email</label>
									</div>
									<div className="input-field">
										<input
											type="password"
											className={
												objValidInput.isValidPass
													? "form-control noshadow input"
													: "is-invalid form-control input"
											}
											name="Password"
											value={formValues.Password}
											onChange={handleInputChange}
											id="pass"
											required
										/>
										<label htmlFor="pass">Password</label>
									</div>
									<div className="input-field">
										<button type="submit" className="submit">
											Sign In
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login_Admin;
