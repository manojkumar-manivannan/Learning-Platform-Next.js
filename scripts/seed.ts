const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Machine Learning" },
        { name: "Data Structures" },
        { name: "Web Development" },
        { name: "Computer Networks" },
        { name: "Operating Systems" },
        { name: "Database Management" },
      ]
    });

    console.log("Success");
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();