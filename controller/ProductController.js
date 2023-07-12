// import mongodb models here

exports.getAllProducts = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      status: "All ok",
    },
  });
};
