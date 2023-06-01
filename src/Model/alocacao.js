const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const userModel = {
  createUser: async (data) => {
    return prisma.user.create({
      data,
    });
  },
}

getAllAlocacoes:async  = () =>{
  return prisma.alocacao.findMany()
}