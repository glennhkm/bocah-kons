import mediaModel from "../models/mediaModel.js";

export const createMedia = async (req, res) => {
  try {
    const obj = {
      mediaType: "image",
      mediaUrl: req.file.filename,
      articleId: req.body.articleId,
    };
    console.log("File Media : ", req.file);
    const content = await new mediaModel(obj).save();
    res.status(201).json({ message: "Data created successfully", content });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
  
export const getMediaByArticleId = async (req, res) => {
  try {
    let content = await mediaModel.find({ articleId: req.params.articleId });
    // const url = content.mediaUrl;
    content.map((item) => {
      item.mediaUrl = `https://1ec5-36-82-98-99.ngrok-free.app/mediaStorage/${item.mediaUrl}` ;
    })
    if (content.length < 1) {
      return res.status(404).json({ message: "Media not found" });
    }
    res.status(200).json({ message: "Get data successfully", content });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
