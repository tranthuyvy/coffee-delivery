import PropTypes from "prop-types";

const CardSizeItem = ({ size }) => {
  return (
    <div className="w-[50px] mb-5">
      <div className="font-serif rounded-lg p-3 text-center border border-opacity-70 border-borderGray bg-white text-primary hover:bg-primary cursor-pointer hover:text-white hover:border-none">
        <p className="uppercase text-[16px] lg:text-[17px] sm:text-lg text-inherit 3xl:text-[20px]">
          {size?.size?.size_name}
        </p>
      </div>
    </div>
  )
}

CardSizeItem.propTypes = {
  size: PropTypes.string.isRequired,
};

export default CardSizeItem
