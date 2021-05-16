interface Printer {
    copyDocument(): void;
    printDocument(document: Document): void;
    stapleDocument(document: Document, tray: Number): void;
}


class SimplePrinter implements Printer {

    public copyDocument() {
        //...
    }

    public printDocument(document: Document) {
        //...
    }

    public stapleDocument(document: Document, tray: Number) {
        //...
    }

}