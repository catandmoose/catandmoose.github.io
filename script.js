const projectsContainer = document.getElementById('projects');

async function fetchGitHubProjects() {
    const response = await fetch('https://api.github.com/users/catandmoose/repos');
    const projects = await response.json();

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';

        const title = document.createElement('h2');
        title.textContent = project.name;

        const description = document.createElement('p');
        description.textContent = project.description || 'No description available';

        projectDiv.appendChild(title);
        projectDiv.appendChild(description);
        projectsContainer.appendChild(projectDiv);
    });
}

fetchGitHubProjects();
