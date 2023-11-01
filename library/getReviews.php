<?php
include "db.php";
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');

class getReviews extends DB {
    public function selectTask() {
        $book_id = $_GET['book_id'];
        
        $sql = "SELECT u.username, r.review, r.review_score
                FROM review r
                JOIN users u ON r.user_id = u.id
                WHERE r.book_id = $book_id";
        

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

$postTask = new getReviews();
echo  json_encode($postTask->selectTask(), JSON_PRETTY_PRINT);
?>