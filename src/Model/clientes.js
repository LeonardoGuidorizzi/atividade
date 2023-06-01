const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();


const ClientesModel = {
    createUser: async (data) => {
      return prisma.clientes.create({
        data,
      });
    },
  
  
  getAllClientes:async  = () =>{
    return prisma.clientes.findMany()
  },
  
  getClientesById:async = (id) =>{
      return prisma.clientes.findUnique({
       where: {
          id,
      },
      });
  }

}



module.exports = { ClientesModel }