<?php
include "db.php";
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');

class getReviews extends DB {
    public function selectTask() {

        $user = $_GET['user_id'];

        // Construct the SQL query to select title from books and review-related information from the review table based on the book ID
        $sql = "SELECT b.title AS book_title, r.review, r.review_score
                FROM review r
                JOIN books b ON r.book_id = b.id
                WHERE r.user_id = $user";
        


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