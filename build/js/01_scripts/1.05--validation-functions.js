// 1. JAVASCRIPT LAYER [ 1.02 SHOW/HIDE FUNCTIONS ] ###################################################################
// A. SHOW/HIDE +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function initValidationFunctions() {

// A.3. CAROUSEL SCRIPTS ----------------------------------------------------------------------------------------------

  // A.2.1. DESTROY CAROUSEL ------------------------------

    "use strict";

    var hasDataInputs = false;
    $(document).ready(function() { $('.a-form-input').each(function() { $(this).val().length && $(this).trigger('change'); }); });

    // EMAIL FIELD
    var emailInput = $('.a-form-input[name="email"][required]');
    var emailRegex = /^[a-zA-Z0-9._-]+(@{1})[a-zA-Z0-9.-]+\.[a-zA-Z]{1,5}$/;
    emailInput.bind('keypress keydown keyup blur change', function () {
      if (!$(this).val().match(emailRegex)) {
        $(this.parentNode).removeClass('a-verified');
        $(this.parentNode).addClass('a-verify');
        $(this).removeClass('a-verified');
        $(this).addClass('a-verify');
      }
      else {
        $(this.parentNode).removeClass('a-verify');
        $(this.parentNode).addClass('a-verified');
        $(this).removeClass('a-verify');
        $(this).addClass('a-verified');
      }
    });

    // TEXT FIELD
    var textInput = $('.form-control.required[type="text"]');
    var noRegex = /^[#.0-9a-zA-Z\s,-]+$/;
    textInput.on('keypress keydown keyup bind change', function () {
      if (!$(this).val().match(noRegex)) {
        $(this.parentNode).removeClass('a-verified');
        $(this.parentNode).addClass('a-verify');
        $(this).removeClass('a-verified');
        $(this).addClass('a-verify');
      }
      else {
        $(this.parentNode).removeClass('a-verify');
        $(this.parentNode).addClass('a-verified');
        $(this).removeClass('a-verify');
        $(this).addClass('a-verified');
      }
    });

    // PHONE/TELEPHONE FIELD
    var phoneInput = $('.a-form-input[name="phone"][required]');
    var phoneRegex = /^0\d{9,11}$/;
    phoneInput.on('keypress keydown keyup bind change', function () {
      if (!$(this).val().match(phoneRegex)) {
        $(this).removeClass('a-verified');
        $(this).addClass('a-verify');
      }
      else {
        $(this).removeClass('a-verify');
        $(this).addClass('a-verified');
      }
      // Value validation
      if($(this).val() == ''){
        $(this).next('.a-form-help').text($(this).next('.a-form-help').data('validate-empty'));
      } else {
        $(this).next('.a-form-help').text($(this).next('.a-form-help').data('validate-wrong'));
      }
    });

    // PASSWORD FIELD
    var passwordInput = $('.a-form-input[name="password"][required]');
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/g;
    passwordInput.bind('keypress keydown keyup blur change', function () {
      if (!$(this).val().match(passwordRegex)) {
        $(this).removeClass('a-verified');
        $(this).addClass('a-verify');
      }
      else {
        $(this).removeClass('a-verify');
        $(this).addClass('a-verified');
      }
      strengthMeter($(this));
      var strength = checkPasswordStrength($(this).val(), $(this));
      var $outputTarget = $(this).siblings('.a-strength-wrap').find('.a-strength');
      $outputTarget.removeClass(function (index, css) {
        return (css.match (/\a-level-\S+/g) || []).join(' ');
      });
      $outputTarget.addClass('a-level-' + strength);
      if (confirmInput.val()){
        confirmInput.trigger('change');
      }
    });

    // CONFIRM PASSWORD FIELD
    var confirmInput = $(".a-form-input[name='confirmPassword']");
    confirmInput.on('keypress keydown keyup bind change', function () {
      if (passwordInput.val() != confirmInput.val()) {
        $(this).removeClass('a-verified');
        $(this).addClass('a-verify');
      } else {
        $(this).removeClass('a-verify');
        $(this).addClass('a-verified');
      }
    });

    // MEMBERSHIP FIELD
    var memberLoginField = $('.a-form-input[name="memLogin"][required]');
    var membershipRegex = /^\d{8}$/;
    memberLoginField.on('keypress keydown keyup bind change', function () {
      // Check if email OR membership
      if ($(this).val().match(emailRegex) || $(this).val().match(membershipRegex)) {
        $(this).removeClass('a-verify');
        $(this).addClass('a-verified');
      }
      else {
        $(this).removeClass('a-verified');
        $(this).addClass('a-verify');
      }
    });

    // POST CODE FIELD - PAYMENT PAGE
    var postCodeField = $('.a-form-input[name="postCode"][required]');
    var postCodeRegex = /[A-Z]{1,2}[0-9][0-9A-Z]?\s?[0-9][A-Z]{2}/gi;
    postCodeField.on('keypress keydown keyup bind change', function () {
      // Check if email OR membership
      if ($(this).val().match(postCodeRegex)){
        $(this).removeClass('a-verify');
        $(this).addClass('a-verified');
      }
      else {
        $(this).removeClass('a-verified');
        $(this).addClass('a-verify');
      }
    });

    // SORT CODE FIELD - PAYMENT PAGE
    var sortCodeField = $('.a-form-input[name="sortCode"][required]');
    var sortCodeRegex = /^[0-9]\d{5}$/;
    sortCodeField.on('keypress keydown keyup bind change', function () {
      if (!$(this).val().match(sortCodeRegex)) {
        $(this).removeClass('a-verified');
        $(this).addClass('a-verify');
      }
      else {
        $(this).removeClass('a-verify');
        $(this).addClass('a-verified');
      }
    });

    // ACCOUNT NUMBER FIELD - PAYMENT PAGE
    var accountNumberField = $('.a-form-input[name="accountNumber"][required]');
    var accountNUmberRegex = /^[0-9]\d{7}$/;
    accountNumberField.on('keypress keydown keyup bind change', function () {
      if (!$(this).val().match(accountNUmberRegex)) {
        $(this).removeClass('a-verified');
        $(this).addClass('a-verify');
      }
      else {
        $(this).removeClass('a-verify');
        $(this).addClass('a-verified');
      }
    });

    // Toggle Password field
    $('.a-toggle-password .a-reveal').click(function() {
      // var confirmPassword = $(this).next('input');
      if ($(this).hasClass('a-hide')) {
        $(this).removeClass('a-hide');
        $(this).addClass('a-show');
        $(this).next('input').attr('type', 'text');
      } else {
        $(this).removeClass('a-show');
        $(this).addClass('a-hide');
        $(this).next('input').attr('type', 'password');
      }
    }).mouseout(function() {
      $(this).removeClass('a-show');
      $(this).addClass('a-hide');
      $(this).next('input').attr('type', 'password');
    });

    // Strength Meter
    function strengthMeter(elem) {
      if (elem.val().length == 0) {
        elem.siblings('.a-strength-wrap').hide();
        elem.siblings('.a-error').delay(100).show();
      }
      else {
        elem.siblings('.a-error').hide();
        elem.siblings('.a-strength-wrap').delay(100).show(100);
      }
    }
    function checkPasswordStrength(password, test) {
      var strength = 0;
      var strengthWrap = test.siblings('.a-strength-wrap').find('.a-strength');
      var strengthText = strengthWrap.find('.a-strength-text');
      // If password is empty
      if (password.length == 0) {
        strength = 0;
      } else {
        strength += 1;
      }
      // If password is 8 characters or longer
      if (password.length >= 8) {
        strength += 1;
      }
      // If password contains both lower and uppercase characters, increase strength value.
      if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
        strength += 1;
      }
      // If it has numbers and special characters, increase strength value.
      if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) {
        strength += 1;
      }
      if (strength >= 0){
        strengthText.text(strengthWrap.data('str-weak'));
      }
      if (strength >= 2){
        strengthText.text(strengthWrap.data('str-medium'));
      }
      if (strength >= 4){
        strengthText.text(strengthWrap.data('str-strong'));
      }
      return strength;
    }

    // SELECT FIELD
    var selectField = $('.a-select[required]');
    var selectRegex = new RegExp('please|Please');
    selectField.on('change',function(){
      $(this).removeClass('a-dis');
      if(selectRegex.test($(this).val())){
        $(this).removeClass('a-verified');
        $(this).addClass('a-verify');
      } else {
        $(this).removeClass('a-verify');
        $(this).addClass('a-verified');
      }
    });

    // SELECT FIELD - TITLE OPTION
    $('#titleField').on('change',function(){
      if ($(this).val()==="Other"){
        $('#titleOtherField').parent().show();
      } else if ($(this).val()!=="Other"){
        $('#titleOtherField').parent().hide();
      }
    });

    // CHECKBOX VALIDATION
    var checkInput = $('.a-check-input[type="checkbox"][required]');
    checkInput.on('keypress keydown keyup bind change', function () {
      if($(this).prop("checked") === true){
        $(this).removeClass('a-verify');
        $(this).addClass('a-verified');
        $(this).siblings('.a-form-help').css('display', 'none');
      }
      else {
        $(this).removeClass('a-verified');
        $(this).addClass('a-verify');
        $(this).siblings('.a-form-help').css('display', 'block');
      }
    });

    // DATE FIELD
    var dateInput = $('.a-form-input[name="date"][required]');
    dateInput.on('keypress keydown keyup bind change', function(e) {
      var str = $(this).val();
      var n = str.search(/(((0|1)[0-9]|2[0-9]|3[0-1])\s\/\s(0[1-9]|1[0-2])\s\/\s((19|20)\d\d))$/);
      var len = str.length;
      $(this).val(str);
      str = str.replace(/\s\/\s/g, "");
      len = str.length;
      $(this).data("value", str);
      if (len <= 2) {
        $(this).val(str.slice(0, 2));
      } else if (len <= 4) {
        $(this).val(str.slice(0, 2) + " / " + str.slice(2, 4));
      } else {
        $(this).val(
          str.slice(0, 2) +
          " / " +
          str.slice(2, 4) +
          " / " +
          str.slice(4, 8)
        );
      }
      if (n !== 0) {
        $(this).removeClass('a-verified');
        $(this).addClass('a-verify');
      } else {
        var ageLimit = moment($(this).val()).add(18, 'years').unix();
        var currentYear = moment().unix();
        if (ageLimit > currentYear) {
          $(this).removeClass('a-verified');
          $(this).addClass('a-verify');
        } else {
          $(this).removeClass('a-verify');
          $(this).addClass('a-verified');
        }
      }
    });

    // CUSTOM SPECIFIC FIELDS ON PAYMENT FORM
    $('#customer_company_name').on('change', function () {
      $(this).attr("required", true);
      $('#customer_given_name, #customer_family_name').removeAttr('required')
    });
    $('#customer_given_name, #customer_family_name').on('change', function () {
      $(this).attr("required", true);
      $('#customer_company_name').removeAttr('required');
    });
    // Validate button
    $('.a-form-input[required]').on('keypress keydown keyup bind change', function () {
      var thisFrom = $(this).closest('.o-val');
      if(thisFrom.find('.a-verified[required]').length === thisFrom.find('.a-form-input[required]').length){
        thisFrom.find('button[type="submit"]').removeAttr("disabled");
      }
      else{
        thisFrom.find('button[type="submit"]').prop("disabled", true);
        hasDataInputs = true;
      }
    });
    // Your Details Form button
    $('.o-details .a-form-input').on('keypress keydown keyup bind change', function () {
      var thisFrom = $(this).closest('.o-val');
      if(thisFrom.find('.a-verified[required]').length === thisFrom.find('.a-form-input[required]').length){
        thisFrom.find('button[type="submit"]').removeAttr("disabled");
      }
      else{
        thisFrom.find('button[type="submit"]').prop("disabled", true);
      }
    });
    //if browser is chrome
    setTimeout(function(){
      if(hasDataInputs == false){
        if ($("#login-email").css('background-color')=="rgb(232, 240, 254)"){
          var thisFrom = $("#login-email").closest('.o-val');
          thisFrom.find('button[type="submit"]').removeAttr("disabled");
          hasDataInputs = true;
        }
      }
    },500);
  // A.2.1. END -----------------------------------------

// A.3. END -----------------------------------------------------------------------------------------------------------

}

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 1. JAVASCRIPT LAYER [ 1.02 END ] ###################################################################################