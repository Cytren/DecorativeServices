# Decorative Services

Decorative services is a simple library for injecting services into a class.

## Installation
```
npm install --save @decorative/services
```

## Example
```
import {Injectable, Inject} from "@decorative/services";
 
class MyService {
    value = "My Value";
}
 
@Injectable
class MyClass {
 
    @Inject
    myService: MyService;
}
 
const inst = new MyClass();
console.log(inst.myService.value);
```

## Service Provider
If the service does not have a default constructor, a service provider can
be used to build the instance.

```
class MyService {
    constructor (public value: string) {}
}
 
class MyServiceProvider implements ServiceProvider<MyService> {
    provide () {
        return new MyService("Default Value");
    }
}
```