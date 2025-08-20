# snippy-cli
A simple **command-line tool** to save, search, and reuse your code snippets directly from the terminal.   No more Googling the same `curl` or `docker` commands again and again 🚀



## 📦 Installation

```bash
npm install -g snippy-cli
```

## 🛠️ Usage

Save a snippet:
```bash
snippet save auth_header "Authorization: Bearer <token>"
```


List all snippets:
```bash
snippet list

Output:
auth_header → Authorization: Bearer <token>
docker_build → docker build -t myapp .
```

Copy snippet to clipboard📋:
```bash
snippet copy auth_header
```


## 📂 Storage

Snippets are stored in a JSON file located at:

~/.snippets.json


This makes it easy to:
```
  Back up your snippets
  Share them across devices
  Edit them manually if needed
```



## 🗺️ Roadmap
```
   Add search command (filter by keyword) 
   Support tags (e.g., --tag docker)
   Interactive menu mode (select snippet from a list)
   Sync with GitHub Gist or cloud storage
   Export/import snippets
```
    
