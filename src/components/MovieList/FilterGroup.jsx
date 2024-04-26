import React from "react";

const FilterGroup = ({ onRatingClick, minRating, rating }) => {
  return (
    <ul className="align_center movie_filter">
      {rating.map((rate) => (
        <li
          className={
            minRating == rate ? "movie_filter_item active" : "movie_filter_item"
          }
          onClick={() => onRatingClick(rate)}
          key={rate}
        >
          {rate}+ Star
        </li>
      ))}
    </ul>

    //  <li
    //     className={
    //       minRating == 7 ? "movie_filter_item active" : "movie_filter_item"
    //     }
    //     onClick={() => onRatingClick(7)}
    //   >
    //     7+ Star
    //   </li>
    //   <li
    //     className={
    //       minRating == 6 ? "movie_filter_item active" : "movie_filter_item"
    //     }
    //     onClick={() => onRatingClick(6)}
    //   >
    //     6+ Star
    //   </li>
  );
};

export default FilterGroup;
