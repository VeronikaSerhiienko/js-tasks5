'use strict';

function ask(question, answer, ok, fail) {
  var result = prompt(question, '');
  if (result === answer) {
    ok();
  } else {
    fail();
  }
}

var userv1 = {
  login: 'Andrew',
  password: '12345',

  loginOk: function() {
    console.log(this.login + ' - login success');
  },

  loginFail: function() {
    console.log(this.login + ' - login failed');
  },

  checkPassword: function() {
    ask("Your password?", this.password, this.loginOk.bind(this), this.loginFail.bind(this));
  }
};

var userv2 = {
  login: 'Andrew',
  password: '12345',

  loginOk: function() {
    console.log(this.login + ' - login success');
  },

  loginFail: function() {
    console.log(this.login + ' - login failed');
  },

  checkPassword: function() {
    var self = this;
    ask("Your password?", this.password, 
      function() {
        self.loginOk();
      },
      function() {
        self.loginFail();
      }
    );
  }
};

userv1.checkPassword();

var user1 = userv1;
userv1 = null;
user1.checkPassword();

userv2.checkPassword();

var user2 = userv2;
userv2 = null;
user2.checkPassword();