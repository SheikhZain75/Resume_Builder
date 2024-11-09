document.getElementById('generate-btn')!.addEventListener('click', () => {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;

    const resumePreview = document.getElementById('resume-preview')!;
    resumePreview.innerHTML = `
        <h2>${name}</h2>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <h3>Work Experience</h3>
        <p>${experience}</p>
        <h3>Education</h3>
        <p>${education}</p>
    `;

    document.getElementById('download-btn')!.style.display = 'block';
});

document.getElementById('download-btn')!.addEventListener('click', () => {
    const resumePreview = document.getElementById('resume-preview')!.innerHTML;
    const pdfWindow = window.open('', '_blank');
    pdfWindow!.document.write(`
        <html>
            <head>
                <title>Resume</title>
                <style>
                    body { font-family: Arial, sans-serif; }
                    h2 { margin: 0; }
                </style>
            </head>
            <body>
                ${resumePreview}
            </body>
        </html>
    `);
    pdfWindow!.document.close();
    pdfWindow!.print();
});
``