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

    // ایجاد یک ردیف جدید در جدول
    const newRow = `
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${fatherName}</td>
            <td>${familyName}</td>
            <td>${passportNumber}</td>
            <td>${dob}</td>
            <td>${passportIssueDate}</td>
            <td>${expiryDate}</td>
            <td>${phoneNumber}</td>
            <td>${afghanistanPhoneNumber}</td>
            <td>${afghanistanAddress}</td>
            <td>${iranAddress}</td>
            <td>${serviceType}</td>
            <td>${gender}</td>
        </tr>
    `;

    // ذخیره داده‌ها در جدول
    const table = document.getElementById('dataTable');
    table.innerHTML += newRow;

    // ذخیره اطلاعات در localStorage
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

    // گرفتن داده‌ها از localStorage و اضافه کردن داده جدید
    let storedData = JSON.parse(localStorage.getItem('userData')) || [];
    storedData.push(userData);
    localStorage.setItem('userData', JSON.stringify(storedData));

    // پاک کردن فرم پس از ارسال
    document.getElementById('personalForm').reset();

    // نمایش پیغام موفقیت
    alert('اطلاعات با موفقیت ذخیره شد!');
});
