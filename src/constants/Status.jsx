export function getOrderStatus(status) {
  switch (status) {
    case 0:
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-white bg-primary">
          {/* {status.split('_').join(' ').toLowerCase()} */} Cho Xac Nhan
        </span>
      )
    case 1:
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-sky-600 bg-sky-100">
          {/* {status.split('_').join(' ').toLowerCase()} */} Da Xac Nhan
        </span>
      )
    case 2:
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-orange-600 bg-orange-100">
          {/* {status.split('_').join(' ').toLowerCase()} */} Dang Thuc Hien
        </span>
      )
    case 3:
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-teal-600 bg-teal-100">
          {/* {status.split('_').join(' ').toLowerCase()} */} Dang Giao
        </span>
      )
    case 4:
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-white bg-green">
          {/* {status.split('_').join(' ').toLowerCase()} */} Da Giao
        </span>
      )
    default:
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-gray-600 bg-gray-100">
          {/* {status.split('_').join(' ').toLowerCase()} */} Da Huy
        </span>
      )
  }
}

export function getProductStatus(status) {
  if (typeof status === 'string') {
    switch (status) {
      case 'Unactive':
        return (
          <span className="capitalize py-1 px-2 rounded-md text-xs text-white bg-main">
            {status.split('_').join(' ').toLowerCase()}
          </span>
        );
      default:
        return (
          <span className="capitalize py-1 px-2 rounded-md text-xs text-white bg-green">
            {status.split('_').join(' ').toLowerCase()}
          </span>
        );
    }
  } else {

    return null;
  }
}

