document.getElementById('personalForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // گرفتن مقادیر از فیلدها
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const fatherName = document.getElementById('fatherName').value;
    const familyName = document.getElementById('familyName').value;
    const passportNumber = document.getElementById('passportNumber').value;
    const dob = document.getElementById('dob').value;
    const passportIssueDate = document.getElementById('passportIssueDate').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const afghanistanPhoneNumber = document.getElementById('afghanistanPhoneNumber').value;
    const afghanistanAddress = document.getElementById('afghanistanAddress').value;
    const iranAddress = document.getElementById('iranAddress').value;
    const serviceType = document.getElementById('serviceType').value;
    const gender = document.getElementById('gender').value;

    // ساخت شیء جدید برای ذخیره داده‌ها
    const userData = {
        firstName,
        lastName,
        fatherName,
        familyName,
        passportNumber,
        dob,
        passportIssueDate,
        expiryDate,
        phoneNumber,
        afghanistanPhoneNumber,
        afghanistanAddress,
        iranAddress,
        serviceType,
        gender
    };

    // دریافت داده‌های قبلی از localStorage یا ایجاد آرایه خالی
    let storedData = JSON.parse(localStorage.getItem('userData')) || [];

    // اضافه کردن داده جدید به آرایه
    storedData.push(userData);

    // ذخیره مجدد داده‌ها در localStorage
    localStorage.setItem('userData', JSON.stringify(storedData));

    // پاک کردن فرم پس از ارسال
    document.getElementById('personalForm').reset();

    // نمایش پیغام موفقیت
    alert('اطلاعات با موفقیت ذخیره شد!');
});
