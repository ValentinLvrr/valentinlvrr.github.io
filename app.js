const container = document.getElementById('project_container');

function createProjectBox(repo_name,repo_desc,repo_stars,main_language,click_url)  {
    const div = document.createElement('div');
    div.classList.add('project_box')

    const title = document.createElement('h2');
    title.textContent = repo_name
    div.appendChild(title)

    const description = document.createElement('h4')
    description.textContent = repo_desc
    div.appendChild(description)

    const language = document.createElement('h4')
    language.textContent = "made with " + main_language
    div.appendChild(language)

    const stars = document.createElement('h4')
    stars.textContent = repo_stars+" ⭐"
    div.appendChild(stars)

    div.addEventListener('click', function() {
        window.open(click_url,'_blank');
    })
    
    container.appendChild(div);
}

(() => {
    fetch('https://api.github.com/users/ValentinLvrr/repos')
    .then(response => response.json())
    .then(data => {
        for (i in data) {
            if (data[i]['id'] != 582566991 && data[i]['id'] != 603343096){ // excluding readme.md & portfolio
                createProjectBox(
                    repo_name = data[i]['name'],
                    repo_desc = data[i]['description'],
                    repo_stars = data[i]['stargazers_count'],
                    main_language = data[i]['language'],
                    click_url = data[i]['html_url']
                )
            }
        }
    })
})()