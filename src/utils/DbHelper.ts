import mysql from 'serverless-mysql';

export default class DbHelper {
  public static query = async (query: string) => {
    const db = mysql({
      config: {
        host: '',
        database: '',
        user: '',
        password: ''
      }
    });

    try {
      const results = await db.query(query);
      await db.end();
      return results;
    }
    catch (error) {
      return { error };
    }
  }
}
