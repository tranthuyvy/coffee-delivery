import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfileRequest } from "../../redux/actions/actions";

const CustomerProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user.data);

  useEffect(() => {
    dispatch(getUserProfileRequest());

  }, [dispatch])

  console.log("user", user)

  return (
    <div>
      Customer Profile
    </div>
  )
}

export default CustomerProfile
