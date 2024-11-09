document.getElementById('generate-btn').addEventListener('click', function () {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var experience = document.getElementById('experience').value;
    var education = document.getElementById('education').value;
    var resumePreview = document.getElementById('resume-preview');
    resumePreview.innerHTML = "\n        <h2>".concat(name, "</h2>\n        <p>Email: ").concat(email, "</p>\n        <p>Phone: ").concat(phone, "</p>\n        <h3>Work Experience</h3>\n        <p>").concat(experience, "</p>\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n    ");
    document.getElementById('download-btn').style.display = 'block';
});
document.getElementById('download-btn').addEventListener('click', function () {
    var resumePreview = document.getElementById('resume-preview').innerHTML;
    var pdfWindow = window.open('', '_blank');
    pdfWindow.document.write("\n        <html>\n            <head>\n                <title>Resume</title>\n                <style>\n                    body { font-family: Arial, sans-serif; }\n                    h2 { margin: 0; }\n                </style>\n            </head>\n            <body>\n                ".concat(resumePreview, "\n            </body>\n        </html>\n    "));
    pdfWindow.document.close();
    pdfWindow.print();
});
"";
