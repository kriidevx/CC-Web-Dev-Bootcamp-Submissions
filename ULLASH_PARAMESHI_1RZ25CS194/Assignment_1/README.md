# Git & GitHub Bootcamp – Assignment

This assignment is designed to help you practice the Git and GitHub concepts covered in the session.

## Objective
You will practice the basic workflow of contributing to a repository using **fork, clone, commit, and pull request**.

---

## Steps to Complete the Assignment

### 1. Fork the Repository
Click the **Fork** button on the top right of this repository page to create your own copy of the repository under your GitHub account.

---

### 2. Clone Your Forked Repository
Clone the forked repository to your local machine.

```bash
git clone https://github.com/<your-username>/<repository-name>.git
```

Move into the repository folder:

```bash
cd <repository-name>
```

---

### 3. Create Your Markdown File

Create a new Markdown file with your name.

Example:

```
your-name.md
```

Example:

```
vidisha-dewan.md
```

Inside the file, add a short description about yourself.

Example structure:

```markdown
# Your Name

## About Me
Write a short introduction about yourself.

## Interests
- Interest 1
- Interest 2

## Goals
What you want to learn in this bootcamp.
```

---

### 4. Add and Commit Your Changes

Stage your file:

```bash
git add your-name.md
```

Commit the changes:

```bash
git commit -m "Add introduction file for <your-name>"
```

---

### 5. Push Changes to Your Fork

```bash
git push origin main
```

---

### 6. Create a Pull Request

1. Go to your forked repository on GitHub.
2. Click **Compare & Pull Request**.
3. Ensure:
   - **Base repository** → original bootcamp repository
   - **Base branch** → main
   - **Compare branch** → your fork's main branch
4. Click **Create Pull Request**.

---

## Submission Checklist

Before submitting, ensure:

- You forked the repository
- You cloned the fork locally
- You created a Markdown file with your name
- You committed the file
- You pushed the commit to your fork
- You created a Pull Request

---

Good luck and happy coding!
See ullash.md for my full bio and interests.
