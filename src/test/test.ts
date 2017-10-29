
import {assert} from "chai";
import {Injectable, Inject, ServiceProvider, registerProvider, getService} from "../main/index";

class SimpleService {
    public name = "Service Name";
}

describe("Non-injected class", () => {
    class SimpleClass {
        public simpleService: SimpleService;
    }

    const inst = new SimpleClass();

    it("Should have an undefined simpleService", () => {
        assert.isUndefined(inst.simpleService);
    });
});

describe("Injected class", () => {
    @Injectable
    class SimpleClass {
        @Inject
        public simpleService: SimpleService;
    }

    const inst = new SimpleClass();

    it("Should have an instance of simpleService", () => {
        assert.isDefined(inst.simpleService);
    });

    it("Should have a valid name on simpleService", () => {
        assert.equal(inst.simpleService.name, "Service Name");
    });
});

describe("Service provided class", () => {
    class ParameterizedService {
        constructor (public prop: string) {}
    }

    class ParameterizedServiceProvider implements ServiceProvider<ParameterizedService> {
        public provide (): ParameterizedService {
            return new ParameterizedService("Parameterized Service Name");
        }
    }

    registerProvider(ParameterizedService, new ParameterizedServiceProvider());
    const service: ParameterizedService = getService(ParameterizedService);

    it("Should return instance from the provider", () => {
        assert.equal(service.prop, "Parameterized Service Name");
    });
});
