
import {ServiceProvider} from "./provider";

const providers = new Map<Function, ServiceProvider<any>>();
const services = new Map<Function, object>();

export function registerProvider (type: Function, provider: ServiceProvider<any>) {
    providers.set(type, provider);
}

export function getProvider (type: Function) {
    return providers.get(type);
}

export function getService (type: Function): any {
    let service = services.get(type);
    if (service) { return service; }

    const provider = getProvider(type);

    if (provider) {
        service = provider.provide();
    } else {
        service = new (type as FunctionConstructor)();
    }

    services.set(type, service);
    return service;
}
