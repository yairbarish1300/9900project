class InMemorySharedStorage {
  constructor() {
    if (!InMemorySharedStorage.sharedData) {
      InMemorySharedStorage.sharedData = [];
    }
    this.data = InMemorySharedStorage.sharedData;
  }

  create(item) {
    this.data.push(item);
    return item;
  }

  find(id) {
    return this.data.find(item => item.id === id);
  }

  where(predicate) {
    return this.data.filter(predicate);
  }

  remove(id) {
    const index = this.data.findIndex(item => item.id === id);
    if (index !== -1) {
      return this.data.splice(index, 1)[0];
    }
    return null;
  }
}

module.exports = InMemorySharedStorage;
