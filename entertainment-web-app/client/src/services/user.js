const baseURL = `${import.meta.env.VITE_BACKEND_URL}/user`;

const saveToBookmark = async (userId, mediaId, type) => {
  const options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, mediaId, type }),
  };
  const res = await fetch(`${baseURL}/bookmarks`, options);
  if (!res.ok) {
    throw {
      message: "failed to saved data, please try again later",
      status: res.status,
    };
  }
  const data = await res.json();
  return data;
};

const getUserBookmarks = async (userId) => {
  const res = await fetch(`${baseURL}/bookmarks/${userId}`);
  if (!res.ok) {
    throw {
      message: "failed to get user data. please try again later",
      status: res.status,
    };
  }
  const data = await res.json();
  return data;
};

export { saveToBookmark, getUserBookmarks };
