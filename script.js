document.addEventListener("DOMContentLoaded", function() {
    const pageTitleElement = document.getElementById('pageTitle');
    const outputGridElement = document.getElementById('outputGrid');
    const projectDisplayElement = document.getElementById('projectDisplay');

    const portfolioCollection = [
        {
            "itemTitle": "Paris",
            "category": "travel",
            "id": 1,
            "description": "Explore the romantic streets of Paris, from the Eiffel Tower to the charming cafes.",
            "image": "paris.jpg"
        },
        {
            "itemTitle": "Kyoto",
            "category": "travel",
            "id": 2,
            "description": "Experience the ancient beauty of Kyoto with its temples, shrines, and traditional teahouses.",
            "image": "kyoto.jpg"
        },
        {
            "itemTitle": "New York City",
            "category": "travel",
            "id": 3,
            "description": " The city that never sleeps, featuring iconic landmarks like Times Square and Central Park.",
            "image": "newyork.jpg"
        },
        { 
            "itemTitle": "Sunset Photography",
            "category": "photography",
            "id": 101,
            "description": "Capturing the serene beauty of sunsets from the world's most picturesque locations.",
            "image": "sunset.jpg"
        },
        {
            "itemTitle": "Wildlife Safari",
            "category": "photography",
            "id": 102,
            "description": "A photographic journey through the wild, capturing the essence of nature's most majestic creatures.",
            "image": "wildlife.jpg"
        },
        {
            "itemTitle": "Urban Landscapes",
            "category": "photography",
            "id": 103,
            "description": "Exploring the urban jungle, highlighting the architecture and street life of modern cities.",
            "image": "urban.jpg"
        }
    ]
    ;



    const urlParams = new URLSearchParams(window.location.search);
    const section = urlParams.get('section');
    const id = urlParams.get('id');

    if (!section) {
        displayAllProjects(); 
    } else if (section !== 'item') {
        displayProjectPreviews(section);
    } else {
        displayProjectPage(id);
    }

    function displayAllProjects() {
        pageTitleElement.textContent = 'All Items';
        outputGridElement.innerHTML = '';
        portfolioCollection.forEach(item => {
            outputGridElement.appendChild(createProjectPreview(item));
        });
    }

    function displayProjectPreviews(section) {
        pageTitleElement.textContent = section === 'travel' ? 'Travel Destinations' : 'Photography Projects';
        outputGridElement.innerHTML = '';
        portfolioCollection.forEach(item => {
            if (item.category === section) {
                outputGridElement.appendChild(createProjectPreview(item));
            }
        });
    }

    function displayProjectPage(id) {
        const project = portfolioCollection.find(item => item.id == id);
        if (project) {
            projectDisplayElement.innerHTML = '';
            projectDisplayElement.appendChild(createProjectPage(project));
        }
    }

    function createProjectPreview(project) {
        const container = document.createElement('div');
        container.className = 'project-card';
        
        const link = document.createElement('a');
        link.href = `?section=item&id=${project.id}`;
        link.className = 'project-link';
    
        const title = document.createElement('span');
        title.textContent = project.itemTitle;
        title.className = 'project-title';
    
        container.style.backgroundImage = `url('${project.image}')`;
        link.appendChild(title);
        container.appendChild(link);
        
        return container;
    }
    function createProjectPage(project) {
        const container = document.createElement('div');
        const title = document.createElement('h2');
        title.textContent = project.itemTitle;
    
        const image = document.createElement('img');
        image.src = project.image;
        image.alt = project.itemTitle;
        image.className = 'project-image'; 
    
        const description = document.createElement('p');
        description.textContent = project.description;
        description.className="description"
    
        container.appendChild(title);
        container.appendChild(image);
        container.appendChild(description);
    
        return container;
    }
    
});
