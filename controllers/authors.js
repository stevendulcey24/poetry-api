import authors from "../models/authors.js";

export const getauthors = async (req, res) => {
  try {
    const author = await authors.find();
    res.json(author);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getauthor = async (req, res) => {
  try {
    const { id } = req.params;
    const author = await authors.findById(id);

    if (author) {
      return res.json(author);
    }

    res.status(404).json({ message: "Author not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createauthor = async (req, res) => {
  try {
    const Author = new authors(req.body);
    await Author.save();
    res.status(201).json(Author);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateauthor = async (req, res) => {
  try {
    const { id } = req.params;
    const Author = await authors.findByIdAndUpdate(id, req.body);
    res.status(201).json(Author);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteauthor = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await authors.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Character deleted!");
    }

    throw new Error("Author not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};