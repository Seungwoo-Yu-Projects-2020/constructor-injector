class Replacer {
  constructor(options: any) {
    for(const name of Object.keys(options)) {
      this[name as keyof this] = options[name];
    }
  }
}

export default class ConstructorInjector {
  static inject<T>(klass: {new(): T}, options: T, callOriginalConstructor: boolean = false, overrideOriginalParameters: boolean = true) : T {
    (<any>Object).setPrototypeOf(Replacer.prototype, klass.prototype)
    let customInstance = new Replacer(options) as T;
    if(callOriginalConstructor) {
      let originalInstance: T | undefined = new klass();
      for(const key of Object.keys(originalInstance as any)) {
        if(originalInstance[key as keyof T] !== undefined && (customInstance[key as keyof T] === undefined || !overrideOriginalParameters)) {
          customInstance[key as keyof T] = originalInstance[key as keyof T];
        }
      }
      originalInstance = undefined;
    }
    return customInstance;
  }
}
