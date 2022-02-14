import React from "react";
import "../Pages/Chart.css";
import Navbar from  "../Components/Navbar";

const Chart = () => {

    return (
        <div className={'chart'}>
			<div className={'chart-layout'}>
                <div className="chart-navbar">
                    <Navbar />
                </div>
				<div className={'chart-namepage'}>
					<h1>Chart</h1>
				</div>
				<div className={'chart-content'}>
                    <div className={'chart-add-item'}>
                        <button onClick={() => alert('Add')} className={'chart-btn-add'}>+</button>
                    </div>
				</div>
			</div>
		</div>
    )
}

export default Chart;