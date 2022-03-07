import { Calculator } from "./calculator";

describe("Calculator test suite", ()=> {

    it("add should returm correct result", ()=> {
      expect(new Calculator().add(1,2)).toBe(3);
    });

    it("subtract should returm correct result", ()=> {
        expect(new Calculator().subtract(3,2)).toBe(1);
      });

      
  });

