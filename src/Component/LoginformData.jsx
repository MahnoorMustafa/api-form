const handleSubmit = async() => {
    // store the states in the form data
    const loginFormData = new FormData();
    loginFormData.append("username", formValue.email)
    loginFormData.append("password", formValue.password)
  
    try {
      // make axios post request
      const response = await axios({
        method: "post",
        url: "/api/login",
        data: loginFormData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch(error) {
      console.log(error)
    }
  }