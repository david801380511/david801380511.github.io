function addCourse() {
    const container = document.getElementById('coursesContainer');
    const courseDiv = document.createElement('div');
    courseDiv.className = 'course-entry';
    
    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'courses[]';
    input.required = true;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() {
        container.removeChild(courseDiv);
    };
    
    courseDiv.appendChild(input);
    courseDiv.appendChild(deleteBtn);
    container.appendChild(courseDiv);
}

function validateFile(file) {
    const validTypes = ['image/jpeg', 'image/png'];
    const errorElement = document.getElementById('imageError');
    
    if (!validTypes.includes(file.type)) {
        errorElement.textContent = 'Please select a JPG or PNG file only';
        return false;
    }
    errorElement.textContent = '';
    return true;
}

function resetForm() {
    document.getElementById('introForm').reset();
    document.getElementById('coursesContainer').innerHTML = '';
    document.getElementById('formSection').style.display = 'block';
    document.getElementById('introContent').style.display = 'none';
}

function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const imageFile = form.image.files[0];
    
    if (!validateFile(imageFile)) {
        return;
    }

    // Create intro content
    const introContent = document.getElementById('introContent');
    introContent.innerHTML = `
        <h2>${form.name.value} | ${form.mascot.value}</h2>
        <figure>
            <img id="uploadedImage" alt="${form.imageCaption.value}">
            <figcaption>${form.imageCaption.value}</figcaption>
        </figure>
        <ul>
            <li><strong>Personal Background:</strong> ${form.personalBg.value}</li>
            <li><strong>Professional Background:</strong> ${form.professionalBg.value}</li>
            <li><strong>Academic Background:</strong> ${form.academicBg.value}</li>
            <li><strong>Background in Web Development:</strong> ${form.webDevBg.value}</li>
            <li><strong>Primary Computer Platform:</strong> ${form.platform.value}</li>
            <li><strong>Courses:</strong>
                <ul>
                    ${Array.from(form.querySelectorAll('input[name="courses[]"]'))
                        .map(input => `<li>${input.value}</li>`)
                        .join('')}
                </ul>
            </li>
            ${form.funnyThing.value ? `<li><strong>Funny Thing:</strong> ${form.funnyThing.value}</li>` : ''}
            ${form.anything.value ? `<li><strong>Additional Info:</strong> ${form.anything.value}</li>` : ''}
        </ul>
        <button onclick="resetForm()">Create Another Intro</button>
    `;

    // Display the uploaded image
    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('uploadedImage').src = e.target.result;
    };
    reader.readAsDataURL(imageFile);

    // Show the intro content and hide the form
    document.getElementById('formSection').style.display = 'none';
    introContent.style.display = 'block';
}

// Add initial course field
window.onload = function() {
    addCourse();
};
