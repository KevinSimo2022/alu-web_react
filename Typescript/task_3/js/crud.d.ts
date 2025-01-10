// Import types `RowID` and `RowElement` from './interface'
import { RowID, RowElement } from './interface';

// Inserts a row and returns its ID
export declare function insertRow(row: RowElement): number;

// Deletes a row by its ID
export declare function deleteRow(rowId: RowID): void;

// Updates a row by its ID and returns a status or new version
export declare function updateRow(rowId: RowID, row: RowElement): number;
