
export function Inject <T extends Function> (target: T): T | void {
    if (!target.prototype.__injections__) { return; }

    const constructor = function () {
        target.prototype.__injections__.forEach(item => this[item.property] = item.service);
    };

    constructor.prototype = Object.create(target.prototype);
    constructor.prototype.constructor = target;

    return constructor as any;
}
