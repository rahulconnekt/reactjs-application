import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { Container } from "reactstrap";
import { Row, Col } from "reactstrap";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "./Login.module.css";
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
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";

import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { connect } from "react-redux";

import * as actions from "../../../store/actions/index";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(2),
			width: "20em",
			display: "block",
			["@media (max-width:320px)"]: {
				width: "15em",
			},
			["@media (min-width:321px) and (max-width:410px)"]: {
				width: "18em",
			},
		},
	},
	label: {
		color: "red",
		["@media (max-width:320px)"]: {},
	},
}));

export function Login(props) {
	const classes = useStyles();
	const [checked, setChecked] = useState(false);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [isSignUp, setIsSignUp] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [values, setValues] = React.useState({
		password: "",
		showPassword: false,
	});

	const handleClickShowPassword = () => {
		console.log(values.password);
		setValues({ ...values, showPassword: !values.showPassword });
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};
	const handleUsernameChange = (event) => {
		setUsername(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleChange = (event) => {
		setChecked(event.target.checked);
	};
	const handleChange1 = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setIsLoading(true);
		console.log(username, password, checked);
		props.onAuth(username, password);
	};

	let authRedirect = null;
	if (props.isAuthenticated) {
		console.log("redirected");
		setIsLoading(false);

		authRedirect = <Redirect to={props.authRedirectPath} />;
	}

	const backDrop = isLoading ? (
		<Backdrop className={classes.backdrop} open={isLoading}>
			<CircularProgress color="inherit" />
		</Backdrop>
	) : null;
	return (
		<div>
			{authRedirect}
			{backDrop}
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
							<div className={styles.login_text}>
								Login Account
							</div>
							<div className={styles.login_desc}>
								<span>
									This is a secure system and you will need to
								</span>
								<br></br>
								<span>
									provide your login details to access the
									site.
								</span>
							</div>
							<form
								className={classes.root}
								noValidate
								autoComplete="off"
								style={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<TextField
									required
									id="username"
									label={
										<span
											className={
												styles.usernamePassowrdLabel
											}
										>
											Username or Phone
										</span>
									}
									variant="outlined"
									fullWidth={true}
									value={username}
									onChange={handleUsernameChange}
								/>
								<TextField
									required
									id="password"
									label={
										<span
											className={
												styles.usernamePassowrdLabel
											}
										>
											Password
										</span>
									}
									type={
										values.showPassword
											? "text"
											: "password"
									}
									autoComplete="current-password"
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
														<Visibility />
													) : (
														<VisibilityOff />
													)}
												</IconButton>
											</InputAdornment>
										),
									}}
								/>

								<div className={styles.forgotPwdDiv}>
									<FormControlLabel
										className={classes.label}
										control={
											<Checkbox
												className={styles.checkBox}
												checked={checked}
												onChange={handleChange}
												name="remember me"
											/>
										}
										label={
											<span
												className={styles.checkBoxLabel}
											>
												Remember Me
											</span>
										}
									/>
									<div style={{ paddingBottom: "10px" }}>
										<a
											href="#"
											className={styles.forgotPassword}
										>
											<Link
												to="/forgot-password"
												style={{ color: "red" }}
											>
												<span>Forgot Password?</span>
											</Link>
										</a>
									</div>
								</div>
								<Button
									variant="contained"
									color="secondary"
									className={styles.button}
									onClick={handleSubmit}
									style={{
										textTransform: "none",
										fontWeight: "lighhter",
									}}
								>
									Sign In
								</Button>
							</form>
							<div className={styles.noAcc}>
								<span className={styles.signUpText}>
									Don't have an account?
								</span>{" "}
								<a
									href="#"
									style={{ color: "red", fontWeight: "500" }}
								>
									<Link to="/signup" style={{ color: "red" }}>
										SIGN UP
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

const mapStateToProps = (state) => {
	return {
		loading: state.auth.loading,
		error: state.auth.error,
		isAuthenticated: state.auth.token !== null,
		authRedirectPath: state.auth.authRedirectPath,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAuth: (username, password) =>
			dispatch(actions.auth(username, password)),
		onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath("/")),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
