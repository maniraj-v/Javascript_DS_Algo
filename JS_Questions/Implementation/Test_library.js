const createTestLibrary = () => {
  const tests = [];

  const addTest = (name, testFn) => {
    tests.push({ name, testFn });
  };

  const runTests = () => {
    tests.forEach(({ name, testFn }) => {
      try {
        testFn();
        console.log(`${name}: PASS`);
      } catch (error) {
        console.log(`${name}: FAIL - ${error.message}`);
      }
    });
  };

  const assertEqual = (actual, expected) => {
    if (actual !== expected) {
      throw new Error(`Expected ${expected}, but got ${actual}`);
    }
  };

  const assertTrue = (value) => {
    if (value !== true) {
      throw new Error(`Expected true, but got ${value}`);
    }
  };

  return { addTest, runTests, assertEqual, assertTrue };
};

// Example usage:
const testLib = createTestLibrary();

testLib.addTest('should add numbers correctly', () => {
  const result = 2 + 2;
  testLib.assertEqual(result, 4);
});

testLib.addTest('should check if true is true', () => {
  testLib.assertTrue(true);
});

testLib.runTests();
