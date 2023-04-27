import Members from "../models/members.js";

export const getAllMembers = async (req, res) => {
  try {
    const members = await Members.find({});
    res.status(200).json(members);
  } catch (error) {
    res.status(500).json({
      location: "error on getAllMembers",
      message: error.message,
    });
  }
};
export const addMember = async (req, res) => {
  const member = req.body;
  try {
    const newMember = await Members.create(member);
    res.status(200).json(newMember);
  } catch (error) {
    res.status(500).json({
      location: "error on addMember",
      message: error.message,
    });
  }
};
export const getSingleMember = async (req, res) => {
  const { id } = req.params;
  try {
    const member = await Members.findById(id);
    res.status(200).json(member);
  } catch (error) {
    res.status(500).json({
      location: "error on getSingleMember",
      message: error.message,
    });
  }
};
