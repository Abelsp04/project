import React from "react";

export function Cards() {
	return (
		<div className="d-flex bd-highlight">
			<div className="">
				<div className="p-2 bd-highlight">
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTem2SU6oN_YjOaW9od3BOFSYSl2493ebxnhx3DkVVz7fBO2Y-Y&usqp=CAU"
						className="card-img"
						alt="..."
					/>
				</div>
			</div>
			<div className="p-2 flex-grow-1 bd-highlight">
				<div className="">
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							This is a wider card with supporting text below as a natural lead-in to additional content.
							This content is a little bit longer.
						</p>
						<p className="card-text">
							<small className="text-muted">Last updated 3 mins ago</small>
						</p>
					</div>
					<div className="p-2 bd-highlight">Third flex item</div>
				</div>
			</div>
		</div>
	);
}
