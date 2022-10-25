const Manager = require("../lib/Manager");

test("Can set officeNumber", ()=>{
    const testValue = 12345;
    const e = new Manager("Test", 1, "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

test("Can get officeNumber with getOfficeNumber", ()=>{
    const testValue = 12345;
    const e = new Manager("Test", 1, "test@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});

test("getRole() should return \"Manager\"", ()=>{
    const testValue = "Manager";
    const e = new Manager("Test", 1 , "test@test.com", 100);
    expect(e.getRole()).toBe(testValue);
})