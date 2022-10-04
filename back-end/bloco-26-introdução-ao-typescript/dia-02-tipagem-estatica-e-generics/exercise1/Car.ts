class Car {
  brand: string;
  color: string;
  doors: number;

  constructor(brand: string, color: string, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk(): void {
    console.log('Acionou a buzina');
  }

  turnOn(): void {
    console.log('Ligou o carro');
  }

  turnOff(): void {
    console.log('Deligou o carro');
  }

  speedUp(): void {
    console.log('Acelerou o carro');
  }

  speedDown(): void {
    console.log('Desacelerou o carro');
  }

  stop(): void {
    console.log('Parou o carro');
  }

  turn(direction: string): void {
    console.log(`Virou o carro para ${direction}`);
  }
}

export default Car;