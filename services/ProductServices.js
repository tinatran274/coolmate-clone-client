const createProduct = async (product) => {
  axios({
    method: 'post',
    url: `${process.env.API_ROOT}/api/product/add`,
    data: product,
    headers: { 'Content-Type': 'multipart/form-data' }
  })
    .then(function (response) {
      //handle success
      console.log(response)
    })
    .catch(function (response) {
      //handle error
      console.log(response)
    })
}
