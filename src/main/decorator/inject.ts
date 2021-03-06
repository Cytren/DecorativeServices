
import {getService} from "../service/injector";

export function Inject (target, property) {
    const type = Reflect.getMetadata("design:type", target, property);

    if (!target.constructor.prototype.__injections__) {
        target.constructor.prototype.__injections__ = [];
    }

    target.constructor.prototype.__injections__.push({
        name: type.name,
        property,
        service: getService(type as FunctionConstructor),
    });
}
