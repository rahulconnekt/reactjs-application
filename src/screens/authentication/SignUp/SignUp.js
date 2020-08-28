import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { Row, Col } from "reactstrap";
import styles from "./SignUp.module.css";
import {
	TextField,
	FormControlLabel,
	Checkbox,
	Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import unnamed from "./images/unnamed-6@2x.png";
import path from "./images/Path-361.png";
import Logo2x from "./images/Logo@2x.png";
import Logo from "./images/Logo.png";
import insta from "./images/asset-1@2x.png";
import fb from "./images/asset-2@2x.png";
import twitter from "./images/asset-6@2x.png";
import InputAdornment from "@material-ui/core/InputAdornment";

import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const useStyles = makeStyles((theme) => ({
	root1: {
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			display: "flex",
			["@media (min-width:426px) and (max-width:767px)"]: {
				width: "9.5em",
			},
			["@media (min-width:376px) and (max-width:425px)"]: {
				width: "9.5em",
			},
			["@media (min-width: 320px) and (max-width: 375px)"]: {
				width: "8.6em",
			},
			["@media (min-width: 768px) and (max-width: 1023px)"]: {
				width: "12em",
			},
			["@media (min-width:1024px) and (max-width:1439px)"]: {
				width: "14.5em",
			},
			["@media (min-width:1440px) and (max-width:2559px)"]: {
				width: "14.6em",
			},
			["@media (min-width:2560)"]: {
				width: "14.6em",
			},
		},
	},
	root2: {
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			display: "block",
			["@media (min-width: 320px) and (max-width: 375px)"]: {
				width: "18em",
			},
			["@media (min-width:376px) and (max-width:425px)"]: {
				width: "20em",
			},
			["@media (min-width:426px) and (max-width:767px)"]: {
				width: "20em",
			},
			["@media (min-width: 768px) and (max-width: 1023px)"]: {
				width: "25em",
			},
			["@media (min-width:1024px) and (max-width:1439px)"]: {
				width: "30em",
			},
			["@media (min-width:1440px) and (max-width:2559px)"]: {
				width: "30em",
			},
		},
		"& .MuiFormControlLabel-root": {
			margin: 0,
		},
	},
	label: {
		color: "red",
	},
}));

export default function Login(props) {
	const classes = useStyles();
	const [checked, setChecked] = useState(false);
	const [values, setValues] = React.useState({
		password: "",
		showPassword: false,
	});
	const [values1, setValues1] = useState({
		confirmPassword: "",
		showConfirmPassword: false,
	});
	const handleChange1 = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};
	const handleClickShowPassword = () => {
		console.log(values.password);
		setValues({ ...values, showPassword: !values.showPassword });
	};

	const handleClickShowConfirmPassword = () => {
		setValues1({
			...values1,
			showConfirmPassword: !values1.showConfirmPassword,
		});
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};
	return (
		<div>
			<Container fluid={true}>
				<Row>
					<Col xs="7" className={styles.left}>
						<div className={styles.left_main}>
							<picture>
								<source
									srcSet={Logo}
									media="(max-width: 767px)"
								/>
								<img src={Logo2x} alt="Some picture" />
							</picture>
							<div className={styles.signUp_text}>
								Create Account
							</div>
							<div className={styles.signUp_desc}>
								<span>
									Please complete to create your account.
								</span>
							</div>
							<form
								className={classes.root1}
								Validate
								autoComplete="off"
								id="form1"
							>
								<div className={styles.row1}>
									<TextField
										id="outlined-basic"
										label="First Name"
										variant="outlined"
									/>
									<TextField
										id="outlined-basic"
										label="Last Name"
										variant="outlined"
									/>
								</div>
							</form>
							<form
								className={classes.root2}
								Validate
								autoComplete="off"
								id="form2"
								style={{
									width: "100%",
									display: "grid",
									justifyContent: "center",
									padding: "0%",
								}}
							>
								<div className={styles.row2}>
									<TextField
										id="outlined-basic"
										label="Username"
										variant="outlined"
										fullWidth={true}
									/>
								</div>
								<div className={styles.row2}>
									<TextField
										id="outlined-basic"
										type="email"
										name="email"
										label="E-mail Address"
										variant="outlined"
										fullWidth={true}
									/>
								</div>
								<div className={styles.row2}>
									<TextField
										id="outlined-basic"
										label="Mobile number"
										variant="outlined"
										fullWidth={true}
										InputProps={{
											endAdornment: (
												<div>
													<span
														style={{
															color: "#F2134F",
															textTransform:
																"none",
															fontWeight: "bold",
															cursor: "pointer",
														}}
													>
														Verify
													</span>
												</div>
											),
										}}
									/>
								</div>
								<div className={styles.row2}>
									<TextField
										id="outlined-basic"
										type={
											values.showPassword
												? "text"
												: "password"
										}
										name="password"
										label="Password"
										variant="outlined"
										fullWidth={true}
										onChange={handleChange1("password")}
										value={values.password}
										InputProps={{
											endAdornment: (
												<InputAdornment position="end">
													<IconButton
														aria-label="toggle password visibility"
														onClick={
															handleClickShowPassword
														}
														onMouseDown={
															handleMouseDownPassword
														}
														edge="end"
													>
														{values.showPassword ? (
															<VisibilityOff />
														) : (
															<Visibility />
														)}
													</IconButton>
												</InputAdornment>
											),
										}}
									/>
								</div>
								<div className={styles.row2}>
									<TextField
										id="outlined-basic"
										type={
											values1.showConfirmPassword
												? "text"
												: "confirmPassword"
										}
										label="Confirm Password"
										variant="outlined"
										fullWidth={true}
										onChange={handleChange1(
											"confirmPassword"
										)}
										value={values1.confirmPassword}
										InputProps={{
											endAdornment: (
												<InputAdornment position="end">
													<IconButton
														aria-label="toggle password visibility"
														onClick={
															handleClickShowConfirmPassword
														}
														onMouseDown={
															handleMouseDownPassword
														}
														edge="end"
													>
														{values1.showConfirmPassword ? (
															<VisibilityOff />
														) : (
															<Visibility />
														)}
													</IconButton>
												</InputAdornment>
											),
										}}
									/>
								</div>
								<div className={styles.termsCondition}>
									<FormControlLabel
										className={classes.label}
										control={
											<Checkbox
												checked={checked}
												onChange={() => {
													setChecked(!checked);
												}}
												name="checkedA"
											/>
										}
										label="I agree with terms and conditions"
									/>
								</div>
							</form>
							<div className={styles.buttonDiv}>
								<Button
									variant="contained"
									color="secondary"
									style={{
										width: "200%",
										height: "160%",
										textTransform: "none",
									}}
									onClick={() => {}}
								>
									Sign Up
								</Button>
							</div>
							<div
								className={styles.signInDiv}
								style={{
									justifyContent: "flex-start",
									whiteSpace: "nowrap",
								}}
							>
								Already have an account?
								<a href="#" style={{ color: "red" }}>
									<Link to="/login" style={{ color: "red" }}>
										<span style={{ fontWeight: "500" }}>
											SIGN IN
										</span>
									</Link>
								</a>
							</div>
						</div>
					</Col>
					<Col xs="5" className={styles.parent}>
						<img src={unnamed} alt="" className={styles.image1} />
						<img src={path} alt="" className={styles.image2} />
						<div className={styles.links}>
							<div className={styles.innerLinks}>
								<a href="#">
									<div className={styles.linksDiv1}>
										<img src={fb} />
									</div>
								</a>
								<a href="#">
									<div className={styles.linksDiv2}>
										<img
											src={insta}
											className={styles.instaImage}
										/>
									</div>
								</a>
								<a href="#">
									<div className={styles.linksDiv1}>
										<img src={twitter} />
									</div>
								</a>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
