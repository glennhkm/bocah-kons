import suggestionModel from "../models/suggestionModel.js";

export const getAllSuggestion = async (req, res) => {
  try {
    const data = await suggestionModel.find();
    res.status(200).json({ message: "Get data successfully", data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createSuggestion = async (req, res) => {
  try {
    const data = await new suggestionModel(req.body).save();
    res.status(201).json({ message: "Data created successfully", data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateSuggestion = async (req, res) => {
  try {
    const data = await suggestionModel.findByIdAndUpdate(req.params.id, req.body);
    if (!data) {
      return res.status(404).json({ message: "Suggestion not found" });
    }
    res.status(200).json({ message: "Data updated successfully", data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteSuggestionById = async (req, res) => {
  try {
    const data = await suggestionModel.findByIdAndDelete(req.params.id);
    if (!data) {
      return res.status(404).json({ message: "Suggestion not found" });
    }
    res.status(200).json({ message: "Data deleted successfully", data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
