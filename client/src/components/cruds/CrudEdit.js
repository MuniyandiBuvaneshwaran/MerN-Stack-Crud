import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import { useNavigate, useParams } from "react-router-dom";
import { getSinlgeUser, updateUser } from "../../services/services";

function CrudEdit() {
	const initialState = {
		companyName: "",
		phone: "",
		email: "",
		location: "",
		link: "",
		description: "",
	};
	const [crud, setCrud] = useState(initialState);

	const { _id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const loadSingleUserData = async () => {
		  try {
			const response = await getSinlgeUser(_id);
			setCrud(response);
		  } catch (error) {
			console.log(error.message);
		  }
		};
	
		loadSingleUserData();
	  }, [_id]);

	  const handleSubmit = async (e) => {
		e.preventDefault();
		try {
		  const response = await updateUser(_id, crud);
		  toast.success(response.message);
		  setCrud({
			name: "",
			email: "",
			district: "",
			state: "",
		  });
		  setTimeout(() => {
			navigate("/all");
		  }, 6000);
		} catch (error) {
		  toast.error(error.message);
		}
	  };

	function handleChange(event) {
		setCrud({ ...crud, [event.target.name]: event.target.value });
	}

	function handleCancel() {
		navigate(`/all/${crud._id}`);
	}

	return (
		<div className="container ">
			<h1>Edit {crud.companyName}</h1>
			<hr />
			<form onSubmit={handleSubmit} className="align-items-center">
				<div className="form-group">
					<label className="text-black fw-bold "  >Company Name</label>
					<input
						name="companyName"
						type="text"
						value={crud.companyName}
						onChange={handleChange}
						className="form-control w-25"
					/>
				</div>
				<div className="form-group">
					<label className="text-black fw-bold "> Phone</label>
					<input
						name="phone"
						type="number"
						required
						value={crud.phone}
						onChange={handleChange}
						className="form-control w-25"
					/>
				</div>
				<div className="form-group">
					<label className="text-black fw-bold "> Email</label>
					<input
						name="email"
						type="email"
						pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
						required
						value={crud.email}
						onChange={handleChange}
						className="form-control w-25"
					/>
				</div>
				<div className="form-group">
					<label className="text-black fw-bold "> Location</label>
					<input
						name="location"
						type="text"
						required
						value={crud.location}
						onChange={handleChange}
						className="form-control w-25"
					/>
				</div>
				<div className="form-group">
					<label className="text-black fw-bold "> Website/Social Link</label>
					<input
						name="link"
						type="url"
						value={crud.link}
						onChange={handleChange}
						className="form-control w-25"
					/>
				</div>

				<div className="form-group">
					<label className="text-black fw-bold "> Description</label > 
					<textarea
						name="description"
						row="5"
						value={crud.description}
						onChange={handleChange}
						className="form-control w-25"
					/>
				</div>
				<div className="btn-group mt-3 mb-5">
					<button type="submit" className="btn btn-primary">
						Update
					</button>
					<button
						type="button"
						onClick={handleCancel}
						className="btn btn-secondary"
					>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
}

export default CrudEdit;
