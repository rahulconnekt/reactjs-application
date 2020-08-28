import React, { useState } from "react";
import styles from "./Organisation.module.css";
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import Pagination from '@material-ui/lab/Pagination';

import Table from "../../../../components/OrganisationTable/OrganizationTable";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
		},
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			width: "25ch",
		},
	},
}));

export default function OrganisationSamadhanID() {
	const classes = useStyles();
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const toggle = () => setDropdownOpen((prevState) => !prevState);

	return (
		<div className={styles.main}>
			<div className={styles.title}>
				<span>Organisation List</span>
			</div>
			<div className={styles.tableDiv}>
				<div className={styles.searchBarDiv}>
					<div className={styles.searchAndDrop}>
						<div>
							<div className={styles.searchBar}>
								<SearchIcon />
								<TextField
									id="standard-search"
									label="Search..."
									type="search"
									InputProps={{ disableUnderline: true }}
								/>
							</div>
						</div>
						<div className={styles.dropDownDiv}>
							<Dropdown
								isOpen={dropdownOpen}
								toggle={toggle}
								style={{ borderColor: "#D7DAE2" }}
							>
								<DropdownToggle
									caret
									style={{
										backgroundColor: "white",
										color: "#A4AFB7",
									}}
								>
									Status
								</DropdownToggle>
								<DropdownMenu>
									<DropdownItem header>Actions</DropdownItem>
									<DropdownItem>Some Action</DropdownItem>
									<DropdownItem>Action</DropdownItem>
									<DropdownItem>Foo Action</DropdownItem>
									<DropdownItem>Bar Action</DropdownItem>
									<DropdownItem>Quo Action</DropdownItem>
								</DropdownMenu>
							</Dropdown>
							<Button
								variant="contained"
								style={{
									backgroundColor: "#43425D",
									color: "white",
									borderRadius: "17px",
									textTransform: 'none'
								}}
							>
								Search
							</Button>
						</div>
					</div>
					<div>
						<Button
							variant="contained"
							style={{
								backgroundColor: "#F2134F",
								color: "white",
								borderRadius: "5px",
								fontSize: "15px",
								textTransform: 'none'
							}}
						>
							Add new organisation
						</Button>
					</div>
				</div>
				<div className={styles.table}>
					<Table />
				</div>
				<div style={{ paddingTop:'2%',display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
					<Pagination count={10} variant="outlined" shape="rounded" color='primary'/>
				</div>
			</div>
		</div>
	);
}
