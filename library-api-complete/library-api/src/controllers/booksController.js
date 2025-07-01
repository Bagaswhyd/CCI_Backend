const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getAllBooks = async (req, res) => {
  const books = await prisma.book.findMany();
  res.json(books);
};

exports.createBook = async (req, res) => {
  const { title, author, publishedYear, isbn } = req.body;
  const book = await prisma.book.create({
    data: { title, author, publishedYear, isbn },
  });
  res.json(book);
};

exports.getBookById = async (req, res) => {
  const book = await prisma.book.findUnique({
    where: { id: parseInt(req.params.id) },
  });
  res.json(book);
};

exports.updateBook = async (req, res) => {
  const { title, author, publishedYear, isbn } = req.body;
  const book = await prisma.book.update({
    where: { id: parseInt(req.params.id) },
    data: { title, author, publishedYear, isbn },
  });
  res.json(book);
};

exports.deleteBook = async (req, res) => {
  await prisma.book.delete({ where: { id: parseInt(req.params.id) } });
  res.json({ message: "Book deleted successfully" });
};