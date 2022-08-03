import { useEffect, useState } from "react";

const useServices = () => {
      const [tools, setTools] = useState([]);
      useEffect(() => {
            fetch('https://mysterious-wildwood-50422.herokuapp.com/purchase')
                  .then(res => res.json())
                  .then(data => setTools(data));
      }, []);
      return [tools, setTools]
}
export default useServices;