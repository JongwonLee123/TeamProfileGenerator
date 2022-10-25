const Engineer = require("../lib/Engineer");

test("Can set GitHub username", ()=>{
    const testValue = "gitHub";
    const e = new Engineer("Test", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
});

test("Can get github username by getGithub", ()=>{
    const testValue = "gitHub";
    const e = new Engineer("Test", 1, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});

test("getRole should return \"Engineer\"", ()=>{
    const testValue = "Engineer";
    const e = new Employee("Test", 1, "test@test.com", "Username");
    expect(e.getRole()).toBe(testValue);
})