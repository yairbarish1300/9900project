function getKey<T extends object, K extends keyof T>(obj:T, key:K):T[K]{
    return obj[key];
}