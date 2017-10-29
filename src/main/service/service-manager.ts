
const services = new Map<string, object>();

export function getService (type: FunctionConstructor) {
    const name = type.name;

    let service = services.get(name);
    if (service) { return service; }

    service = new type();
    services.set(name, service);

    return service;
}
