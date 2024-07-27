document.getElementById('resumeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const summary = document.getElementById('summary').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;
    
    const resumeOutput = `
        <h2>${fullName}</h2>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Address: ${address}</p>
        <h3>Professional Summary</h3>
        <p>${summary}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Work Experience</h3>
        <p>${experience}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
    `;
    
    document.getElementById('resumeOutput').innerHTML = resumeOutput;
});
