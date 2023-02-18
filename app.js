function createProjectBox(repo_name,repo_desc,repo_stars)  {
    const div = document.createElement('div');
    div.classList.add('project_box')

    const title = document.createElement('h2');
    title.textContent = repo_name
    div.appendChild(title)

    const description = document.createElement('h4')
    description.textContent = repo_desc
    div.appendChild(description)

    const stars = document.createElement('h4')
    stars.textContent = repo_stars+" ⭐"
    div.appendChild(stars)

    const container = document.querySelector('.project_container');
    container.appendChild(div);
}

(function github_req() {
    return fetch('https://api.github.com/users/ValentinLvrr/repos')
    .then(response => response.json())
    .then(data => {
        for (i in data) {
            console.log(data[i]['name'],':',data[i]['description'])
            createProjectBox(
                repo_name = data[i]['name'],
                repo_desc = data[i]['description'],
                repo_stars = data[i]['stargazers_count']
            )
        }
    })
})()