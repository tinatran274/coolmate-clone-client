const createProduct = async (product) => {
  axios({
    method: 'post',
    url: 'https://localhost:7107/api/product/add',
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
