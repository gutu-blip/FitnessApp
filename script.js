// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Form validation
    const registrationForm = document.getElementById('registration-form');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (validateForm()) {
                alert('Registration successful!');
                registrationForm.reset();
            }
        });
    }

    // Mobile menu toggle
    const menuToggle = document.createElement('button');
    menuToggle.textContent = 'Menu';
    menuToggle.classList.add('menu-toggle');
    document.querySelector('header').prepend(menuToggle);

    menuToggle.addEventListener('click', function() {
        document.querySelector('nav').classList.toggle('active');
    });

    // Dynamic copyright year
    const currentYear = new Date().getFullYear();
    document.querySelector('footer p').textContent = `© ${currentYear} FitTrack. All rights reserved.`;

    // Workout log functionality
    const workoutLogForm = document.getElementById('workout-log-form');
    if (workoutLogForm) {
        const workoutType = document.getElementById('workout-type');
        const cardioFields = document.getElementById('cardio-fields');
        const strengthFields = document.getElementById('strength-fields');
        const intensitySlider = document.getElementById('intensity');
        const intensityOutput = document.querySelector('output[for="intensity"]');

        workoutType.addEventListener('change', function() {
            cardioFields.style.display = this.value === 'cardio' ? 'block' : 'none';
            strengthFields.style.display = this.value === 'strength' ? 'block' : 'none';
        });

        intensitySlider.addEventListener('input', function() {
            intensityOutput.textContent = this.value;
        });

        workoutLogForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (validateWorkoutLog()) {
                logWorkout();
                workoutLogForm.reset();
            }
        });
    }
});

function validateForm() {
    const fullname = document.getElementById('fullname');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    if (fullname.value.trim() === '') {
        alert('Please enter your full name');
        return false;
    }

    if (email.value.trim() === '' || !isValidEmail(email.value)) {
        alert('Please enter a valid email address');
        return false;
    }

    if (password.value.length < 8) {
        alert('Password must be at least 8 characters long');
        return false;
    }

    return true;
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateWorkoutLog() {
    const workoutDate = document.getElementById('workout-date');
    const workoutType = document.getElementById('workout-type');

    if (workoutDate.value === '') {
        alert('Please enter the workout date');
        return false;
    }

    if (workoutType.value === '') {
        alert('Please select a workout type');
        return false;
    }

    return true;
}

function logWorkout() {
    const workoutDate = document.getElementById('workout-date').value;
    const workoutType = document.getElementById('workout-type').value;
    const notes = document.getElementById('notes').value;
    const intensity = document.getElementById('intensity').value;
    const mood = document.getElementById('mood').value;

    const workoutEntry = document.createElement('li');
    workoutEntry.textContent = `${workoutDate} - ${workoutType} (Intensity: ${intensity}/10, Mood: ${mood})`;
    
    const workoutList = document.getElementById('workout-list');
    workoutList.insertBefore(workoutEntry, workoutList.firstChild);

    alert('Workout logged successfully!');
}


