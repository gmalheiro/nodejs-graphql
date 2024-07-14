import { ApolloServer } from "@apollo/server"; //This import is to set up the server and configure it
import { startStandaloneServer } from "@apollo/server/standalone"; //This one is to start up the server so we can start listing for requests
import { typeDefs } from "../data/schema";
import db from "../data/_db";

const resolvers = {
  Query: {
    games() {
      return db.games;
    },
    reviews() {
      return db.reviews;
    },
    review(_, args) {
      return db.reviews.find(review => review.id === args.id);
    },
    game(_, args) {
      return db.games.find(game => game.id === args.id);
    },
    author(_, args) {
      return db.authors.find(author => author.id === args.id);
    },
    authors() {
      return db.authors;
    },
  },
};

// server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
  // typedefs = description of our datatypes and the relationship they have with other data
  /* resolvers =  Resolver functions are determine how we respond to queries for different data on the graph 
    We make resolver functions to handle the queries based on our schema and types*/
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server ready at port ${url}`);
