export const typeDefs = `#graphql
  type Game {
  id: ID!
  title: String! # Use ! when you want a field to be not null
  platform: [String!]!
  }

  type Review {
    id: ID!
    rating: Int,
    content:String!,
    author_id:ID!,
    game_id:ID!
  }

  type Author {
    id: ID!
    name: String!
    verified: Boolean!
  }

  #The Query type is something that every graphql schema needs  
  #it's jobs is to define the entrypoints to the graph and specify the return types of those entrypoints

  type Query {
    games: [Game]
    reviews: [Review]
    review(id: ID!):Review
    authors: [Author]
  }
`;

/* GraphQL there are five basic types: Int, Float, Strings, Booleans, ID(a key for data objects) */