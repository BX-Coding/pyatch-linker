const PyatchLinker = require('../src/index.js');
const linker = new PyatchLinker();
const fs = require('fs');
const path = require("path");

const file = path.join(__dirname, "./", "multi-target-multithread-code-link-expected.py");

let expected = fs.readFileSync(file, "utf8", function(err, data) {
    return data;
});

const target1 = {
    id: 'target1',
    code: ['say("Hello World!")', 'move(10)']
}

const target2 = {
    id: 'target2',
    code: ['think("Hello Universe!")', 'move(5)']
}

test("should produce base imports on top and a single async function containing pyatch code", () => {

    expect(linker.generatePython(target1, target2)).toBe(expected);
})