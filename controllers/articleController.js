import articleModel from "../models/articleModel.js";
import { isValidCategory } from "../utils/helper.js";

export const getAllArticles = async (req, res) => {
  try {
    const category = req.query.category;
    if (category && !isValidCategory(category)) {
      return res.status(400).json({ message: "Category is not available for article model" })
    }
    const content = await articleModel.find(category && { category });
    res.status(200).json({message: "Get data successfully", content});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getArticleById = async (req, res) => {
  try {
    const content = await articleModel.findById(req.params.id);
    if (!content) {
      return res.status(404).json({ message: "Article not found" });
    }
    res.status(200).json({message: "Get data successfully", content});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createArticle = async (req, res) => {
  try {
    console.log("BODY : ", req.body);
    console.log("REQ : ", req);
    console.log("MEDIA : ", req.files);
    const media = (req.files).map((item) => {
      return {
        mediaType: "image",
        mediaUrl: `${process.env.LOCALHOST_URL}/mediaStorage/${item.filename}`
      }
    })
    req.body = {
      ...req.body,
      media
    }
    console.log("BODY AFTER MERGE : ", req.body);
    const content = await new articleModel(req.body).save();
    res.status(201).json({message: "Data created successfully", content});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateArticle = async (req, res) => {
  try {
    const { category } = req.body;
    const media = (req.files).map((item) => {
      return {
        mediaType: "image",
        mediaUrl: `${process.env.LOCALHOST_URL}/mediaStorage/${item.filename}`
      }
    })
    if(category && !isValidCategory(category)){
      return res.status(500).json({ message: `Article validation failed: category: \`${category}\` is not a valid enum value for path \`category\`` });
    }
    if (media) {
      const oldMedia = (await articleModel.findById(req.params.id)).media;
      req.body = {
        ...req.body,
        media: [
          ...oldMedia, ...media
        ]
      }
    }
    const content = await articleModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!content) {
      return res.status(404).json({ message: "Article not found" })
    }
    res.status(200).json({message: "Data updated successfully", content});
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

export const deleteArticleById = async (req, res) => {
    try {
    const content = await articleModel.findByIdAndDelete(req.params.id);
    if (!content) {
      return res.status(404).json({ message: "Article not found" });
    }
    res.status(200).json({message: "Data deleted successfully", content});
} catch (error) {
    res.status(500).json({ message: error.message });
}
};
