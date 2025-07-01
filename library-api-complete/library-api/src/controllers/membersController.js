const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getAllMembers = async (req, res) => {
  const members = await prisma.member.findMany();
  res.json(members);
};

exports.createMember = async (req, res) => {
  const { name, email } = req.body;
  const member = await prisma.member.create({
    data: { name, email },
  });
  res.json(member);
};

exports.getMemberById = async (req, res) => {
  const member = await prisma.member.findUnique({
    where: { id: parseInt(req.params.id) },
  });
  res.json(member);
};

exports.updateMember = async (req, res) => {
  const { name, email } = req.body;
  const member = await prisma.member.update({
    where: { id: parseInt(req.params.id) },
    data: { name, email },
  });
  res.json(member);
};

exports.deleteMember = async (req, res) => {
  await prisma.member.delete({
    where: { id: parseInt(req.params.id) },
  });
  res.json({ message: "Member deleted successfully" });
};
