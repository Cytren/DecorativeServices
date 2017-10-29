
import {assert} from "chai";
import {Inject, Service} from "../main/index";

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
    @Inject
    class SimpleClass {
        @Service(SimpleService)
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
