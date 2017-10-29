
import {assert} from "chai";
import {Injectable, Inject} from "../main/index";

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
