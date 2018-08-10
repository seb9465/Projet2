describe("Mise En Evidence class", () => {
    let doc: Document;
    let tagElem: HTMLElement;

    beforeEach(() => {
        doc = new Document();
        tagElem = document.createElement("td");
        doc.appendChild(tagElem);

    });

    it("Should do nothing", () => {
        expect(true).toBe(true);
    });
});
