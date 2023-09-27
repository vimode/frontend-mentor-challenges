import { createContext, useContext, useState, useEffect } from "react";
import { getUserBookmarks } from "../services/user";

export const UserDataContext = createContext(null);

function UserDataContextProvider({ children }) {
  const uuid = localStorage.getItem("UUID") || null;
  const [bookmarks, setBookmarks] = useState(null);

  useEffect(() => {
    if (!uuid) {
      setBookmarks(null);
    }
    (async function fetchData() {
      const data = await getUserBookmarks(uuid);
      setBookmarks(data);
    })();
  }, [uuid]);

  return (
    <UserDataContext.Provider value={{ bookmarks }}>
      {children}
    </UserDataContext.Provider>
  );
}

export default UserDataContextProvider;
