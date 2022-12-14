const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", ()=>{
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("Can set name via constructor arguements", ()=>{
    const testValue = "Test";
    const e = new Employee(testValue);
    expect(e.name).toBe(testValue);
});

test("Can set id via constructor arguement", ()=>{
    const testValue = 100;
    const e = new Employee("Test", testValue);
    expect(e.id).toBe(testValue);
})

test("Can set email via constructor arguement", ()=>{
    const testValue = "test@test.com";
    const e = new Employee("Test", 1, testValue);
    expect(e.email).toBe(testValue);
})

test("Can get name via getName()", ()=>{
    const testValue = "Test";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
})

test("Can get id via getId()", ()=>{
    const testValue = 100;
    const e = new Employee("Test", testValue);
    expect(e.getId()).toBe(testValue);
})

test("Can get email via getEmail()", ()=>{
    const testValue = "test@test.com";
    const e = new Employee("Test", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
})

test("getRole() should return \"Employee\"", ()=>{
    const testValue = "Employee";
    const e = new Employee("Test", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue);
})