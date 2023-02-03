const PyatchLinker = require('../src/index.js');
const linker = new PyatchLinker();
const fs = require('fs');
const path = require("path");

const file = path.join(__dirname, "./", "single-target-multithread-code-link-expected.py");

let expected = fs.readFileSync(file, "utf8", function(err, data) {
    return data;
});

const target1 = {
    id: 'target1',
    code: ['say("Hello World!")', 'move(10)']
}

test("should produce base imports on top and a single async function containing pyatch code", () => {

    expect(linker.generatePython(target1)).toBe(expected);
})