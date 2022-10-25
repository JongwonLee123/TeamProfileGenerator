const Intern = require("../lib/Intern");

test("Can set up school", ()=> {
    const testValue = "School";
    const e = new Intern("Test", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
});

test("Can get school using getSchool()", ()=>{
    const testValue = "School";
    const e = new Intern("Test", 1 , "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});

test("getRole() should return \"Intern\"", ()=>{
    const testValue = "Intern";
    const e = new Intern("Test", 1, "test@test.com", "gitUser");
    expect(e.getRole()).toBe(testValue);
})