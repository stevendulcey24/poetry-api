import authors from "../models/authors.js";

export const getAuthors = async (req, res) => {
  try {
    const authors = await authors.find();
    res.json(authors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const character = await author.findById(id);

    if (author) {
      return res.json(author);
    }

    res.status(404).json({ message: "Author not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createAuthor = async (req, res) => {
  try {
    const Author = new Author(req.body);
    await Author.save();
    res.status(201).json(character);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const Author = await Author.findByIdAndUpdate(id, req.body);
    res.status(201).json(Author);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Author.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Character deleted!");
    }

    throw new Error("Author not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};