import React from "react";
import "../Pages/Report.css";
import Table from "../Components/Table";
import Search from "../Components/Search";
import Navbar from  "../Components/Navbar";

const Report = () => {
	
    return (
		<div className={'report'}>
			<div className={'report-layout'}>
				<div className={'report-navbar'}>
					<Navbar />
				</div>
				<div className={'namepage'}>
					<h1>Report</h1>
				</div>
				<div className={'table-frame'}>
					<Search />
					<Table />
				</div>
			</div>
		</div>
	)
}

export default Report;