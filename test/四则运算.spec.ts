import fun from "../src/lib/四则运算";


test("四则", () => {
    expect(fun([9,3,1,'-',3,'*','+',10,2,'/','+'])).toBe(20)
})

