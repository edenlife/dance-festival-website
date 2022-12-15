const validateEmail = (rule, value, callback) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!value) {
    callback(new Error('This field is required'))
  } else if (emailRegex.test(value) === false) {
    callback(new Error('Email address is invalid'))
  } else {
    callback()
  }
}

const validatePhoneNumber = (rule, value, callback) => {
  if (!value) {
    callback(new Error('Phone number is required'))
  } else if (value.length !== 11) {
    callback(new Error('Phone number must be 11 digits.'))
  } else {
    callback()
  }
}

const validatePassword = (rule, value, callback) => {
  if (!value) {
    callback(new Error('Password is required'))
  } else if (value.length < 6) {
    callback(new Error('Password must be 6 or more characters.'))
  } else {
    callback()
  }
}

const validatePhoneNumberNG = (rule, value, callback) => {
  if (!value) {
    callback(new Error('Phone number is required'))
  } else if (value.length !== 10) {
    callback(new Error('Phone number must be 10 digits.'))
  } else {
    callback()
  }
}

const validatePhoneNumberKE = (rule, value, callback) => {
  if (!value) {
    callback(new Error('Phone number is required'))
  } else if (value.length !== 9) {
    callback(new Error('Phone number must be 9 digits.'))
  } else {
    callback()
  }
}

const validateName = (rule, value, callback) => {
  if (!value) {
    callback(new Error('This field is required'))
  } else if (value.toLowerCase().includes('undefined')) {
    callback(new Error("Name cannot include 'undefined'"))
  } else if (value.toLowerCase() === 'const') {
    callback(new Error("Name cannot include 'const'"))
  } else if (value.toLowerCase().includes('null')) {
    callback(new Error("Name cannot include 'null'"))
  } else {
    callback()
  }
}
export default {
  methods: {
    validateField(field) {
      return [
        {
          required: true,
          message: `${field || 'This field'} is required`,
          trigger: 'blur',
        },
      ]
    },
    // validateEmail(field) {
    //   return [
    //     {
    //       required: true,
    //       message: `${field || 'This field'} is required`,
    //       trigger: ['change'],
    //     },
    //     {
    //       type: 'email',
    //       message: 'Email address is not valid',
    //       trigger: ['blur'],
    //     },
    //   ]
    // },
    validateEmail() {
      return [{ validator: validateEmail, trigger: 'blur' }]
    },
    validatePhone() {
      return [{ validator: validatePhoneNumber, trigger: ['blur', 'change'] }]
    },
    validatePhoneKE() {
      return [{ validator: validatePhoneNumberKE, trigger: 'blur' }]
    },
    validatePhoneNG() {
      return [{ validator: validatePhoneNumberNG, trigger: 'blur' }]
    },
    validateName() {
      return [{ validator: validateName, trigger: 'blur' }]
    },
    validatePassword() {
      return [{ validator: validatePassword, trigger: ['blur', 'change'] }]
    },
  },
}
