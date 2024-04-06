import userModel from "../model/usermodel.js";

// 1.ADD user Router
export const addUser = async (req, res) => {
  //   res.status(200).json({ message: "Add User Route" });
  try {
    // console.log(req.body);
    const { companyName,phone, email, location, link,description } = req.body;
    const newUser = new userModel({
      companyName,
      phone,
      email,
      location,
      link,
      description,
    });
    await newUser.save();
    res.status(200).json({ message: "User Added Successfull" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 2.GET user Router
//     1.GET All User
export const getallUser = async (req, res) => {
  //   res.status(200).json({ message: "Get All User Route" });
  try {
    const allUser = await userModel.find();
    res.status(200).json(allUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 2.GET Single User
export const getsingleUser = async (req, res) => {
  //   res.status(200).json({ message: "Get Single User Route" });
  try {
    const { id } = req.params;
    const user = await userModel.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 3.UPDATE user Router
export const updateUser = async (req, res) => {
  //   res.status(200).json({ message: "Update User Route" });
  try {
    const { id } = req.params;
    const user = req.body;
    const updateUser = await userModel.findByIdAndUpdate(id, user, { new: true });
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 4.DELETE user Router
export const deleteUser = async (req, res) => {
  //   res.status(200).json({ message: "Delete User Route" });
  try {
    const { id } = req.params;
    await userModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Delete User successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};