const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    MessageID SERIAL PRIMARY KEY,
    Text VARCHAR(255),
    Username VARCHAR(50),
    Added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (Text, Username, Added) 
VALUES
  ('Hi there!', 'Amando', CURRENT_TIMESTAMP),
  ('Hello World!', 'Charles', CURRENT_TIMESTAMP),
  ('Hey everyone!', 'Bryan', CURRENT_TIMESTAMP),
  ('What''s up?', 'Odin', CURRENT_TIMESTAMP),
  ('Good morning!', 'Damon', CURRENT_TIMESTAMP);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: "postgresql://aaronren:732293@localhost:5432/messages",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();