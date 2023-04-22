class Report {
  generateReport() {
    this.createHeader();
    this.createBody();
    this.createFooter();
  }
  createHeader() {
    // implementation for creating report header
    console.log("createHeader")
  }
  createBody() {
    // abstract method, to be implemented by subclasses
    console.log("createBody")
  }
  createFooter() {
    // implementation for creating report footer
    console.log("createFooter")
  }
}
class SalesReport extends Report {
  createBody() {
    // implementation for creating sales report body
    console.log("createBody for sales report")
  }
}
class InventoryReport extends Report {
  createBody() {
    // implementation for creating inventory report body
    console.log("createBody for inventory report")
  }
}

const salesReport = new SalesReport();
salesReport.generateReport(); // outputs "createHeader", "createBody for sales report", "createFooter"
const inventoryReport = new InventoryReport();
inventoryReport.generateReport(); // outputs "createHeader", "createBody for inventory report", "createFooter"
