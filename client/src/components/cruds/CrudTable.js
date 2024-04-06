import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllUser } from "../../services/services";

function CrudTable() {
	const [cruds, setCruds] = useState([]);

	const callGetAPI = async () => {
        try {
          const employeeData = await getAllUser();
          setCruds(employeeData);
          console.log("Employee Data:", employeeData);
        } catch (error) {
          console.error("Error fetching employee data:", error);
        }
      };
    
      useEffect(() => {
        callGetAPI();
      }, []);

	return (
		<div className="container">
			<div>
				<h2>
					CRUD - Table View
					<p>
						<Link to="/add" className="btn btn-primary float-right">
							Create CRUD
						</Link>
					</p>
				</h2>
				<hr />
			</div>
		
                        <div className="table-responsive">
			<table className="table riped  table-hover table-bordered container">
				<thead>
					<tr>
						<th>Name</th>
						<th>Phone</th>
						<th>Email</th>
						<th>Location</th>
						<th>View</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{cruds &&
						cruds.map((crud) => {
							return (
								<tr key={crud._id}>
									<td>{crud.companyName}</td>
									<td>{crud.phone}</td>
									<td>{crud.email}</td>
									<td>{crud.location}</td>
									<td>
										<Link to={`/cruds/${crud._id}`} className="btn btn-warning">
											View
										</Link>
									</td>
									<td>
										<Link
											to={`/cruds/${crud._id}/edit`}
											className="btn btn-success"
										>
											Edit
										</Link>
									</td>
									<td>
										<Link
											to={`/cruds/${crud._id}/delete`}
											className="btn btn-danger"
										>
											Delete
										</Link>
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
			</div>
		</div>
	);
}

export default CrudTable;
