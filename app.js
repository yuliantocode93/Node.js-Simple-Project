const { tulisPertanyaan, simpanContact } = require("./contacts");

const main = async () => {
  const nama = await tulisPertanyaan("Masukan nama anda : ");
  const email = await tulisPertanyaan("Masukan email anda : ");
  const noHP = await tulisPertanyaan("Masukan nomor HP anda : ");

  simpanContact(nama, email, noHP);
};

main();
