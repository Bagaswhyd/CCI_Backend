const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getAllLoans = async (req, res) => {
  const loans = await prisma.loan.findMany({
    include: { book: true, member: true },
  });
  res.json(loans);
};

exports.createLoan = async (req, res) => {
  const { bookId, memberId, borrowDate, returnDate } = req.body;
  const loan = await prisma.loan.create({
    data: {
      bookId,
      memberId,
      borrowDate: borrowDate ? new Date(borrowDate) : new Date(),
      returnDate: returnDate ? new Date(returnDate) : null,
    },
  });
  res.json(loan);
};

exports.getLoanById = async (req, res) => {
  const loan = await prisma.loan.findUnique({
    where: { id: parseInt(req.params.id) },
    include: { book: true, member: true },
  });
  res.json(loan);
};

exports.updateLoan = async (req, res) => {
  const { bookId, memberId, borrowDate, returnDate } = req.body;
  const loan = await prisma.loan.update({
    where: { id: parseInt(req.params.id) },
    data: {
      bookId,
      memberId,
      borrowDate: new Date(borrowDate),
      returnDate: returnDate ? new Date(returnDate) : null,
    },
  });
  res.json(loan);
};

exports.deleteLoan = async (req, res) => {
  await prisma.loan.delete({
    where: { id: parseInt(req.params.id) },
  });
  res.json({ message: "Loan deleted successfully" });
};
