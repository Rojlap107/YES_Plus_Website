// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the programs list page
    const programsList = document.getElementById('programs-list');
    if (programsList) {
        renderProgramsList();
        initTabs();
    }

    // Check if we're on a program detail page
    const programDetail = document.getElementById('program-detail');
    console.log('Program detail element found:', programDetail !== null);
    
    if (programDetail) {
        // Get the program ID from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const programId = urlParams.get('id');
        console.log('Program ID from URL:', programId);
        
        if (programId) {
            const program = getProgramById(programId);
            console.log('Program found:', program !== undefined);
            renderProgramDetail(programId);
        } else {
            // Redirect to programs list if no ID is provided
            window.location.href = 'programmes.html';
        }
    }
});

// Initialize the tabs functionality
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get the target tab
            const targetTab = button.dataset.tab;

            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to current button and content
            button.classList.add('active');
            document.getElementById(`${targetTab}-tab`).classList.add('active');
        });
    });
}

// Render all programs on the program list page
function renderProgramsList() {
    const programsList = document.getElementById('programs-list');

    // Clear any existing content
    programsList.innerHTML = '';

    // Get all programs and create vertical items for each
    getAllPrograms().forEach(program => {
        const programItem = document.createElement('div');
        programItem.className = 'programme-item';
        
        // Format the application deadline for display
        const deadline = program.details.applicationDeadline || "Ongoing";
        
        programItem.innerHTML = `
            <a href="program-detail.html?id=${program.id}" class="programme-image-link">
                <div class="programme-image">
                    <img src="${program.image}" alt="${program.title}">
                </div>
            </a>
            <div class="programme-details">
                <a href="program-detail.html?id=${program.id}" class="programme-title-link">
                    <h3>${program.title}</h3>
                </a>
                <p class="programme-deadline">Deadline:<span>${deadline}</span></p>
                <p class="programme-description">${program.shortDescription}</p>
            </div>
        `;
        
        programsList.appendChild(programItem);
    });
}

// Render the program detail page
function renderProgramDetail(programId) {
    console.log('Starting renderProgramDetail with programId:', programId);
    const program = getProgramById(programId);
    
    if (!program) {
        console.error('Program not found with ID:', programId);
        window.location.href = 'programmes.html';
        return;
    }
    
    console.log('Rendering program:', program.title);
    
    // Set page title
    document.title = program.title + ' - YES+';
    
    // Update page banner title and class for program-specific background
    const banner = document.getElementById('program-banner');
    if (banner) {
        // Clear any existing program classes
        banner.className = 'page-banner';
        // Add program-specific class
        banner.classList.add(`${programId}-banner`);
        
        // Update banner title
        const bannerTitle = banner.querySelector('.banner-content h1');
        if (bannerTitle) {
            bannerTitle.textContent = program.title;
        }
    }
    
    // Render program summary (first section)
    console.log('Rendering summary section');
    const programSummary = document.querySelector('.programme-summary');
    if (programSummary) {
        let summaryHTML = `<h3>Program Summary</h3>`;
        
        summaryHTML += `<div class="program-key-info">`;
        
        // Add each detail item to the summary
        for (const [key, value] of Object.entries(program.details)) {
            // Format the key to be more readable
            const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
            
            summaryHTML += `
                <div class="key-info-item">
                    <span class="key-info-label">${label}</span>
                    <span class="key-info-value">${value}</span>
                </div>
            `;
        }
        
        summaryHTML += `</div>`;
        
        // Add a brief description
        summaryHTML += `
            <p>${program.shortDescription}</p>
            
            <div class="program-cta">
                <a href="#" class="btn">${program.id === 'leadership' ? 'Register Now' : 'Apply Now'}</a>
            </div>
        `;
        
        programSummary.innerHTML = summaryHTML;
    } else {
        console.error('Programme summary element not found');
    }
    
    // Render main program details (second section)
    console.log('Rendering details section');
    const programDetails = document.querySelector('.programme-details');
    if (programDetails) {
        let detailsHTML = `
            <h2>Programme Overview</h2>
            <p>${program.fullDescription}</p>
            
            <h3>Programme Highlights</h3>
            <ul class="programme-features">
                ${program.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
            </ul>
        `;
        
        // Add Learning Outcomes or Tracks
        if (program.learningOutcomes) {
            detailsHTML += `
                <h3>Learning Outcomes</h3>
                <p>By the end of this program, participants will:</p>
                <ul class="programme-features">
                    ${program.learningOutcomes.map(outcome => `<li>${outcome}</li>`).join('')}
                </ul>
            `;
        } else if (program.learningTracks) {
            detailsHTML += `
                <h3>Learning Tracks</h3>
                <p>Participants can choose from the following specialization tracks:</p>
                <ul class="programme-features">
                    ${program.learningTracks.map(track => `<li>${track}</li>`).join('')}
                </ul>
            `;
        }
        
        // Add Course Structure
        detailsHTML += `<h3>Course Structure</h3>`;
        
        // Add course modules
        program.courseStructure.forEach(module => {
            detailsHTML += `
                <div class="course-module">
                    <h4>${module.title}</h4>
                    <p>${module.description}</p>
                </div>
            `;
        });
        
        programDetails.innerHTML = detailsHTML;
    } else {
        console.error('Programme details element not found');
    }
    
    // Related programs section removed as requested
    
    // Update breadcrumb
    const breadcrumb = document.querySelector('.programme-breadcrumb');
    if (breadcrumb) {
        breadcrumb.innerHTML = `<a href="programmes.html">All Programmes</a> &gt; ${program.title}`;
    }
    
    console.log('Finished rendering program detail page');
}