import staffModel from "../models/staffModel.js";

// export const getAllSocials = async (req, res) => {
//   try {
//     const content = await socialModel.find();
//     res.status(200).json({ message: "Get data successfully", content });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

export const getStaffBySlug = async (req, res) => {
  try {
    const periode = req.params.periode;
    const department = req.params.department;
    const position = req.params.position;
    const selection = {
        periode,
        ...(department && {department}),
        ...(position && {position})
    }
    const content = await staffModel.find({ ...selection });
    if (!content) {
      return res.status(404).json({ message: "Staff not found" });
    }
    res.status(200).json({ message: "Get data successfully", content });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createStaff = async (req, res) => {
    try {
        const content = await new staffModel(req.body).save();
        res.status(200).json(content);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}   

export const updateStaff = async (req, res) => {
    try {
        const content = await staffModel.findByIdAndUpdate(req.params.id);
        if(!content) {
            res.status(404).json({ message: "Staff not found" });
        }
        res.status(200).json(content);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const updateSocial = async (req, res) => {
  try {
    if (req.body.socialMedia === "email") {
      req.body = {
        ...req.body,
        socialMediaUrl: `https://mail.google.com/mail/?view=cm&to=${req.body.accountName}`,
      };
    } else if (req.body.socialMedia === "phone") {
      req.body = {
        ...req.body,
        socialMediaUrl: `https://api.whatsapp.com/send?phone=${req.body.accountName.slice(1)}`,
      };
    }
    const content = await socialModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!content) {
      return res.status(404).json({ message: "Social not found" });
    }
    res.status(200).json({ message: "Data updated successfully", content });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
