import { FindManyOptions, Repository } from "typeorm";


export abstract class BaseService<T> {
    abstract getRepository() : Repository<T>;

    findAll() : Promise<T[]> {
        return this.getRepository().find();
    }

    findOne(id: any): Promise<T> {
        return this.getRepository().findOne(id);
    }

  

    async delete(id: any) {
        await this.getRepository().delete(id);
    }

    count(options?: FindManyOptions<T>) : Promise<number> {
        return this.getRepository().count(options);
    }
}