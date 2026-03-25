export interface Receipt {
    generate(): string;
}

export class PrintedReceipt implements Receipt {
    generate(): string {
        return "Generated printed receipt.";
    }
}

export class PDFReceipt implements Receipt {
    generate(): string {
        return "Generated PDF receipt.";
    }
}

export class DigitalReceipt implements Receipt {
    generate(): string {
        return "Generated digital receipt.";
    }
}

// creator
export abstract class OrderProcessor {
    // template method
    processOrder(): string {
        this.validateOrder();
        this.chargeOrder();
        const receipt = this.factoryMethod();
        return this.sendOrShowReceipt(receipt.generate());
    }

    protected validateOrder(): void {
        console.log("Validating order...");
    }

    protected chargeOrder(): void {
        console.log("Charging order...");
    }

    // Factory Method que crea un recibo específico según el tipo de tienda
    protected abstract factoryMethod(): Receipt;

    protected sendOrShowReceipt(receipt: string): string {
        console.log("Sending or showing receipt...");
        return receipt;
    }
}

// creator
export class PhysicalStoreProcess extends OrderProcessor {
    protected factoryMethod(): Receipt {
        return new PrintedReceipt();
    }
}

// creator
export class OnlineStoreProcess extends OrderProcessor {
    protected factoryMethod(): Receipt {
        return new PDFReceipt();
    }
}

// creator
export class AppStoreProcess extends OnlineStoreProcess {
    protected factoryMethod(): Receipt {
        return new DigitalReceipt();
    }
}




// programa cliente

const physicalStore = new PhysicalStoreProcess();
console.log(physicalStore.processOrder());
const onlineStore = new OnlineStoreProcess();
console.log(onlineStore.processOrder());
const appStore = new AppStoreProcess();
console.log(appStore.processOrder());

