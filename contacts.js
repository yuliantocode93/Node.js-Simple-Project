const fs = require("fs");

//* Readline Json
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const directoryPath = "data";
if (fs.existsSync(directoryPath) === false) {
  fs.mkdirSync(directoryPath);
}

// membuat contact.json jika belum ada
const dataPath = "data/contacts.json";
if (fs.existsSync(dataPath) === false) {
  fs.writeFileSync(dataPath, "[]", "utf8");
}

const tulisPertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (nama) => {
      resolve(nama);
    });
  });
};

const simpanContact = (nama, email, noHP) => {
  const contact = { nama, email, noHP };
  const file = fs.readFileSync("data/contacts.json", "utf8");
  const contacts = JSON.parse(file);

  contacts.push(contact);

  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

  console.log("Terima kasih sudah memasukkan data anda");

  rl.close();
};

module.exports = { tulisPertanyaan, simpanContact, dataPath };
