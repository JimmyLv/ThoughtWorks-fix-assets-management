export default [
  {
    pattern: 'http://localhost:8080/user/(login|logout)',
    // callback that returns the data
    fixtures: function (data) {
      if (data && data.username === 'admin') {
        if (data.password === 'admin') {
          // login success
          return {
            username: 'admin'
          }
        } else {
          // password incorrect
          throw new function PasswordIncorrectError() {
            this.errorMessage = 'The password is not correct, please input again.'
          };
        }
      } else {
        throw new function UserNotFoundError() {
          this.errorMessage = 'The user is not exist.'
        }
      }
      return 'success'
    },
    // `match`: result of the resolution of the regular expression
    // `data`: data returns by `fixtures` attribute
    callback: function (match, data) {
      if (match[1]) {
        return data
      } else {
        return new Error('Do not match any urls!')
      }
    }
  },{
    pattern: 'http://localhost:8080/user/(assets)',
    // callback that returns the data
    fixtures: function () {
      return {
        data: [
          {
            owner_name: "JimmyLv",
            asset_name: 'Nokia',
            number: '17006011',
            date: '2015-4-25',
            type: 'Mobile'
          },{
            owner_name: "JimmyLv",
            asset_name: 'Mac Book Pro',
            number: '17005800',
            date: '2015-4-22',
            type: 'Laptop'
          },{
            owner_name: "JimmyLv",
            asset_name: 'Screen',
            number: '17006036',
            date: '2014-2-15',
            type: 'Others'
          },{
            owner_name: "SiyuYan",
            asset_name: 'Mac Book Air',
            number: '17004032',
            date: '2015-8-15',
            type: 'Laptop'
          }
        ]
      }
    },
    // `match`: result of the resolution of the regular expression
    // `data`: data returns by `fixtures` attribute
    callback: function (match, data) {
      if (match[1]) {
        return data
      } else {
        return new Error('Do not match any urls!')
      }
    }
  },{
    pattern: 'http://localhost:8080/user/(create)',
    // callback that returns the data
    fixtures: function (data) {
      if(data.username === 'jtao1') {
        return {
          message: 'success'
        }
      } else {
        throw new function() {
          this.message = 'Error when create new user!';
        };
      }
    },
    // `match`: result of the resolution of the regular expression
    // `data`: data returns by `fixtures` attribute
    callback: function (match, data) {
      if (match[1]) {
        return data
      } else {
        return new Error('Do not match any urls!')
      }
    }
  }
];
