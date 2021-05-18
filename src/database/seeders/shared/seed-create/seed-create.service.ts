export class SeedCreateService {

  async create(data: any[], repository: { save: any }): Promise<number> {
    for (const item of data) {
      await repository
        .save(item)
        .catch(error => Promise.reject(error))
    }

    return Promise.resolve(data.length);
  }

}
