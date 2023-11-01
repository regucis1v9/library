<?php
include "db.php";
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');

class getData extends DB {
    public function selectTask() {

        
        $sql = "SELECT * FROM genre";

        $result = $this->conn->query($sql);


        if ($result->num_rows > 0) {
            $books = array();
            while ($row = $result->fetch_assoc()) {
                $books[] = $row;
            }
            return($books);
        }else{
            echo "emmpty";
        }
    }
}

$postTask = new getData();
echo  json_encode($postTask->selectTask(), JSON_PRETTY_PRINT);
?>