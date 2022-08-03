import { useEffect, useState } from "react";

const useServices = () => {
      const [tools, setTools] = useState([]);
      useEffect(() => {
            fetch('http://localhost:5000/purchase')
                  .then(res => res.json())
                  .then(data => setTools(data));
      }, []);
      return [tools, setTools]
}
export default useServices;