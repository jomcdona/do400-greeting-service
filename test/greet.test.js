const assert = require("assert");
const greet = require("../greet");


describe("greet", () =>{

    it("greets in italian", () => {
        assert.strictEqual("Hello Guy from version 3!", greet("Guy"));
    });

});
