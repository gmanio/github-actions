import { NextApiRequest, NextApiResponse } from 'next';
import DbHelper from '../../utils/DbHelper';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const queryResponse = await DbHelper.query('SELECT count(*) from employees');
  await res.json(queryResponse);
}
