import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function useLocationHook() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      /crm|hr|sales|finance|order|hr|procurment|asset|inventory|project|help|buisness|control|application|solution|product|suppliers|organization/.test(
        location?.pathname?.split("/")[1]
      )
    ) {
      navigate("/", { replace: true });
    }

    return navigate('/not-found', { replace: true })
  }, []);
}

export default useLocationHook;
