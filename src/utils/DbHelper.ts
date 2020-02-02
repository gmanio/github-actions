import mysql from 'serverless-mysql';

export default class DbHelper {
  public static query = async (query: string) => {
    const db = mysql({
      config: {
        host: 'db.clevj2qttv65.ap-northeast-2.rds.amazonaws.com',
        database: 'employees',
        user: 'admin',
        password: 'wlakscjs87'
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
