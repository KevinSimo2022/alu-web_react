// Import `RowElement` and `RowID` types
import { RowElement, RowID } from "./interface";

// Import all exported members from the `crud` module
import * as crud from "./crud";

// Create a new row with first and last name
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Insert the row and store its ID
const newRowID: RowID = crud.insertRow(row);

// Update the row with additional data (age)
const updatedRow: RowElement = { ...row, age: 23 };
crud.updateRow(newRowID, updatedRow);

// Delete the row using its ID
crud.deleteRow(newRowID);
