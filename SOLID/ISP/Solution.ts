interface Printer {
    printDocument(document: Document): void;
}


interface Stapler {
    stapleDocument(document: Document, tray: number): void;
}


interface Copier {
    copyDocument(): void;
}

class SimplePrinter implements Printer {
    public printDocument(document: Document) {
        //...
    }
}


class SuperPrinter implements Printer, Stapler, Copier {
    public copyDocument() {
        //...
    }

    public printDocument(document: Document) {
        //...
    }

    public stapleDocument(document: Document, tray: number) {
        //...
    }
}