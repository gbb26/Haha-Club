/* eslint-disable react/prop-types */
import { PuffLoader } from "react-spinners";

function Loader({flag}) {
  return <PuffLoader
  size={100}
  color="#fff"
  loading={flag}
  speedMultiplier={2}
  />;
}

export default Loader;
