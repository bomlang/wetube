/// globerRouter ///
export const trendingVideos = (req, res) => res.render("home");
export const search = (req, res) => res.render("watch");


/// videoRouter ///
export const watch = (req, res) => res.send("Watch Video");
export const editVideo = (req, res) => res.send("Edit Video");
export const uploadVideo = (req, res) => res.send("Upload Video");
export const deleteVideo = (req, res) => res.send("Delete Video");