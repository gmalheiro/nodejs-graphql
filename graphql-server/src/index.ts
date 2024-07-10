import { ApolloServer } from "@apollo/server"; //This import is to set up the server and configure it
import { startStandaloneServer } from '@apollo/server/standalone'  //This one is to start up the server so we can start listing for requests
import { typeDefs } from "../schema";

// server setup
const server = new ApolloServer({
    typeDefs
    // typedefs = description of our datatypes and the relationship they have with other data
    // resolvers =  Resolver functions are determine how we respond to queries for different data on the graph
});

const { url } = await startStandaloneServer(server, {
    listen: { port:4000 }
});

console.log(`Server ready at port: 4000`)