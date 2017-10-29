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