function parseCount(value) {
  const parsedValue = Number.parseFloat(value);
  
  if (isNaN(parsedValue)) {
    throw new Error("Невалидное значение");
  }
  
  return parsedValue;
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
}

console.log(validateCount("123")); 
console.log(validateCount("12.34")); 
console.log(validateCount("abc")); 
console.log(validateCount("123abc")); 
console.log(validateCount("")); 
console.log(validateCount(null)); 

class Triangle {
  constructor(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
    
    this.a = a;
    this.b = b;
    this.c = c;
  }

  get perimeter() {
    return this.a + this.b + this.c;
  }

  get area() {
    const p = this.perimeter / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    
    return Number(area.toFixed(3));
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return {
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
      get area() {
        return "Ошибка! Треугольник не существует";
      }
    };
  }
}

try {
  const triangle1 = new Triangle(3, 4, 5);
  console.log(triangle1.perimeter); 
  console.log(triangle1.area); 
  
  const triangle2 = new Triangle(5, 5, 5);
  console.log(triangle2.perimeter); 
  console.log(triangle2.area); 
  
  const triangle3 = new Triangle(1, 2, 3);
} catch (error) {
  console.log(error.message);
}

const validTriangle = getTriangle(3, 4, 5);
console.log(validTriangle.perimeter); 
console.log(validTriangle.area); 

const invalidTriangle = getTriangle(1, 2, 3);
console.log(invalidTriangle.perimeter); 
console.log(invalidTriangle.area); 

const triangle4 = getTriangle(6, 8, 10);
console.log(`Периметр: ${triangle4.perimeter}`); 
console.log(`Площадь: ${triangle4.area}`); 

const triangle5 = getTriangle(2, 2, 5);
console.log(triangle5.perimeter); 
console.log(triangle5.area); 

const triangle6 = getTriangle(2.5, 3.5, 4.5);
console.log(`Периметр: ${triangle6.perimeter}`); 
console.log(`Площадь: ${triangle6.area}`); 