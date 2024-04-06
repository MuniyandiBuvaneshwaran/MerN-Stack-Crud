import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllUser } from "../../services/services";

function CrudList() {
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
		<div>
			<h2>
				CRUDs
				<p>
					<Link to="/cruds/new" className="btn btn-primary float-right">
						Create CRUD
					</Link>
				</p>
			</h2>
			<hr />
			{cruds.map((crud) => {
				return (
					<div key={crud._id}>
						<h4>
							<Link to={`/cruds/${crud._id}`}>{crud.companyName}</Link>
						</h4>
						<div className="btn-group">
							<Link to={`/cruds/${crud._id}/edit`} className="btn btn-primary">
								Edit
							</Link>
						</div>

						<hr />
					</div>
				);
			})}
		</div>
	);
}

export default CrudList;
