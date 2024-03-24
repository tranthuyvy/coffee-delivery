import PropTypes from 'prop-types';

const CardProductItem = ({ product }) => {
  const { id, name, price, location, images, category } = product;
  const formattedPrice = price.toLocaleString('en');

  return (
    <div className="bg-white rounded-xl shadow-lg mb-10 relative justify-between col-span-1 w-full md:w-[48%] xl:w-[32%] hover:scale-105 transition duration-500 ease-in-out">
      <div>
        <div className='bg-primary rounded-bl-[35px] py-2 pl-8 pr-5 text-center absolute top-0 right-0 w-fit'>
          <p className='text-white font-RobotoMedium text-sm 3xl:text-base'>{category}</p>
        </div>
        <div className='mb-0 md:h-[200px] lg:h-[250px] xl:h-[35vh]'>
          <a href={`/products/${id}`}>
            <img className="w-full h-full object-contain object-center" src={images[0]} alt={name} />
          </a>
        </div>
        <div className='pt-5 pb-3'>
          <h3 className='px-5 text-black font-RobotoSemibold text-xl 3xl:text-2xl leading-[1.3]'>
            {name}
          </h3>
          <hr className='mt-5' />
          <div className='flex py-3 relative'>
            <div className='w-1/2 px-5'>
              <p className='text-base font-RobotoMedium 3xl:text-lg text-primary'>Có Mặt Tại</p>
              <div className=''>
                <span className='relative'>
                  <p className='text-base font-RobotoSemibold 3xl:text-lg text-main'>
                    {location}
                  </p>
                </span>
              </div>
            </div>

            <div className='w-1/2 px-5'>
              <p className='text-base font-RobotoMedium 3xl:text-lg text-primary'>Giá</p>
              <p className='text-base font-RobotoSemibold 3xl:text-lg text-main'>{formattedPrice}VNĐ</p>
              <div className='absolute h-full border-l border-grayWhite top-0 left-[50%]'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CardProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardProductItem
