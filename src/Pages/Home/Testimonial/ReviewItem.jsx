import React from "react";

const ReviewItem = ({ review }) => {
  return (
    <div class="card lg:w-96 mx-5 xl:m-0 bg-base-100 shadow-xl py-5">
      <div class="card-body">
        <p>{review?.review}</p>
      </div>
      <div className="flex items-center px-12">
        <div class="avatar">
          <div class="w-16 rounded-full ring ring-primary ring-offset-base-100  mr-5">
            <img src={review?.img} alt="" />
          </div>
        </div>
        <div>
          <h2 className="font-bold">{review?.name}</h2>
          <h3>{review?.location}</h3>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
