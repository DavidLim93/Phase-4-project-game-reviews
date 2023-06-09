import React, {useState, useEffect} from "react";
import Reviews from "./Reviews";


function ReviewList ({game_id}) {



    const [reviews, setReviews] = useState([]);
   
    
    useEffect (() => {
        fetch(`./reviews`)
        .then((r) => r.json())
        .then((reviews) => {
          // console.log(reviews)
          setReviews(reviews)
        })
      }, [])


      function handleDeleteReview(removedReview) {
      
        if (removedReview && removedReview.id) {
          const deletedReview = reviews.filter((review) => review.id !== removedReview.id);
          setReviews(deletedReview);
        }
      }

      // function handleAddReview(newReview){
      //   console.log(reviews)
      //   setReviews([...reviews, newReview])
      //   // console.log(newReviews)
      // }

     

      function handleUpdateReview(patchedReview) {
      
        const updatedReview = reviews.map((review) => {
            if (review.id === patchedReview.id) {
                return patchedReview;
              } else {
                return review;
              }
            });
            setReviews(updatedReview);
        }
      
        // function filterReview() {
        //     const gameReview = reviews.filter(() => {

        //     })
        // }

    return (
        <div >
            {/* {console.log(game_id)} */}
            {/* {console.log(review.game_id)} */}
            <h3 className="review-heading">Reviews</h3>
            <ul className="review-box">
            {reviews.filter(review => review.game_id === game_id).map(review => {
        return <Reviews
        key={review.id}
        // id={game_id}
        title={review.title}
        description={review.description}
        onDeleteReview={handleDeleteReview}
        onUpdateReview={handleUpdateReview}
        reviews={reviews}
        setReviews={setReviews}
        // onAddReview={handleAddReview}
        id={review.id}
        />
      })}
            </ul>
      
    </div>
    )

}

export default ReviewList;