export const typeDefs = `#graphql
  type Game {
  id: ID!
  title: String! # Use ! when you want a field to be not null
  platform: [String!]!
  reviews:[Review!]
  author:Author!
  }

  type Review {
    id: ID!
    rating: Int
    content:String!
    game:Game!
    author:Author!
  }

  type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews:[Review!]
  }

  #The Query type is something that every graphql schema needs  
  #it's jobs is to define the entrypoints to the graph and specify the return types of those entrypoints

  type Query {
    games: [Game]
    reviews: [Review]
    review(id: ID!):Review
    game(id: ID!):Game
    author(id: ID!):Author
    authors: [Author]
  }
`;

/* GraphQL there are five basic types: Int, Float, Strings, Booleans, ID(a key for data objects) */