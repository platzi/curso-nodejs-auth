const bcrypt = require('bcrypt');

async function verifyPassword() {
  const myPassword = 'admin 123 .202';
  const hash = '$2b$10$.q.8/z3PP1KrruUqNuK9quJgCHQ.5S4w3.FyKmHEGEFqc19OVEqBW';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();
