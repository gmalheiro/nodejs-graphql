import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function logIndexJsContent(filePath) {
  if (filePath === '/Users/suprisullocacaoeservicoltda/Documents/projects/nodejs-graphql/graphql-server/dist/src/index.js') {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace('import { typeDefs } from "../data/schema";', 'import { typeDefs } from "../data/schema.js";');
    content = content.replace('import db from "../data/_db";', 'import db from "../data/_db.js";');
    fs.writeFileSync(filePath, content, 'utf8');
  }
}

function processDirectory(directory) {
  fs.readdirSync(directory).forEach(file => {
    const fullPath = path.join(directory, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else {
      // Log the content of index.js if the path matches
      if (fullPath === '/Users/suprisullocacaoeservicoltda/Documents/projects/nodejs-graphql/graphql-server/dist/src/index.js') {
        logIndexJsContent(fullPath);
      }
    }
  });
}

// Start processing from the root directory (or any specific directory you choose)
processDirectory(__dirname);