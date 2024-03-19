const checkPassword = async (data) => {
  if (!/(?=.*[!@#$%^&*])/.test(data.password)) {
    return { status: false, message: "must contain one special character" };
  }
  if (!/(?=.*[0-9])/.test(data.password)) {
    return {
      status: false,
      message: "Password must contain at least one number."
    };
  }
  if (data.password.trim().length < 8) {
    return {
      status: false,
      message: "Password must be at least 8 characters long."
    };
  }
  if (data.password.trim().length > 20) {
    return { status: false, message: "too long password" };
  }
  return { status: true, message: "Valid password" };
};
export {
  checkPassword
};
//# sourceMappingURL=check.js.map