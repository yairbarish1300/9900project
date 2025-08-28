import { v4 as uuidv4 } from "./node_modules/uuid";

export class inMemoryStorage<T extends object> {
  private data: Array<T & { _id: string }> = [];

  create(item: T): T & { _id: string } {
    const newItem = { ...item, _id: uuidv4() };
    this.data.push(newItem);
    return newItem;
  }

  findAll(
    findFunc: (item: T & { _id: string }) => boolean
  ): Array<T & { _id: string }> {
    return this.data.filter(findFunc);
  }

  remove(
    findFunc: (item: T & { _id: string }) => boolean
  ): Array<T & { _id: string }> {
    const deleted = this.data.filter(findFunc);
    this.data = this.data.filter((item) => !findFunc(item));
    return deleted;
  }
}

export class inMemorySharedStorage {
  private static data: Array<Record<string, any> & { _id: string }> = [];

  create(item: Record<string, any>): Record<string, any> & { _id: string } {
    const newItem = { ...item, _id: uuidv4() };
    inMemorySharedStorage.data.push(newItem);
    return newItem;
  }

  findAll(
    findFunc: (item: Record<string, any> & { _id: string }) => boolean
  ): Array<Record<string, any> & { _id: string }> {
    return inMemorySharedStorage.data.filter(findFunc);
  }

  where(
    objectExample: Record<string, any> & { _id: string }
  ): Array<Record<string, any> & { _id: string }> {
    const keys = Object.keys(objectExample);
    return inMemorySharedStorage.data.filter((el) =>
      keys.every((key) => el[key] === objectExample[key])
    );
  }
}
