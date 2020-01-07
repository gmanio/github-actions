import { graphql, buildSchema } from 'graphql';
import { NextApiRequest, NextApiResponse } from 'next';

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = { hello: () => 'Hello world!' };

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.body.query;
  const response = await graphql(schema, query, root);

  return res.end(JSON.stringify(response));
};