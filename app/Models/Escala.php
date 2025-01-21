<?php


namespace App\Models;

public function import(ImportFileRequest $request)
{
    $file = $request->file('ficheiro');
    \Log::info("File received: " . $file->getClientOriginalName());

    // Read and process the file
    $data = []; // Extracted data from file

    // Save to database
    foreach ($data as $row) {
        DataRow::create([
            'name' => $row['name'], // Example field
        ]);
    }
}
