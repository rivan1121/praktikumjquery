$(document).ready(function() {
  $('#hireForm').submit(function(e) {
      e.preventDefault();

      var name = $('#name');
      var email = $('#email');
      var phone = $('#phone');
      var message = $('#message');

      // Hapus kelas dan pesan validasi sebelumnya
      $('.input-invalid').removeClass('input-invalid');
      $('.validation-message').remove();

      // Memeriksa apakah semua bidang telah diisi
      if (name.val() === '') {
          name.addClass('input-invalid');
          name.after('<div class="validation-message">Please fill out this field.div>');
      }

      // Memeriksa apakah email memiliki format yang benar
      var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      if (email.val() === '' || !emailReg.test(email.val())) {
          email.addClass('input-invalid');
          email.after('<div class="validation-message">*Please enter a valid email address</div>');
      }

      // Memeriksa apakah telepon hanya berisi angka
      var phoneReg = /^[0-9]+$/;
      if (phone.val() === '' || !phoneReg.test(phone.val())) {
          phone.addClass('input-invalid');
          phone.after('<div class="validation-message">*Please enter a valid phone number</div>');
      }

      if (message.val() === '') {
          message.addClass('input-invalid');
          message.after('<div class="validation-message">Please fill out this field.</div>');
      }

      // Jika tidak ada bidang yang tidak valid, formulir dapat disubmit
      if ($('.input-invalid').length === 0) {
          this.submit();
      }
  });
});
$(document).ready(function() {
    $('#hireMeBtn').click(function(e) {
        e.preventDefault(); // Mencegah navigasi ke URL dalam tag <a>
        $('#hireFormContainer').show(); // Menampilkan formulir
    });
});
