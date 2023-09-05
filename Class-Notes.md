# Preview

Before you begin any project, you need to set up a Git repo and establish your workflow. You already practiced creating a Git repo—now you will learn to establish a workflow. As you do that in this lesson, you'll learn about and practice the following three software development workflow concepts:

* Using Git to create branches of the codebase, so you can manage version control.
* Interacting with GitHub, which stores the project's codebase.
* Establishing a Git workflow to manage development work and update the production environment.

**ON THE JOB**Git is the industry-standard version control software. You must demonstrate a thorough, working knowledge of it to get a job as a software developer. After you complete this course, you won't have any problem doing that because you'll get a lot of practice with Git every week.

End of text box.

The following image shows the mock-up for Run Buddy version 2.0, which we'll build during this module:

![The new Run Buddy webpage includes a ](https://courses.bootcampspot.com/courses/927/files/1759086/preview)

As you can observe from the mock-up, version 2.0 includes some subtle visual changes (like rounded corners on the input fields and the call-to-action form). Other changes aren't shown in the mock-up because they involve user interaction.

Before we can add these features, we need to set up our development environment and establish a Git workflow. To accomplish this, we'll follow these steps:

1. Create our development environment. We need to create a separate development environment to work in so that we protect the current "live" Run Buddy website.
2. Learn about feature branches. We'll learn how feature branches are used to allow developers to "work in isolation" on features.
3. Create a `README.md` file for our repo on GitHub. A README file appears on the main repo page and describes the repo.
4. Practice more complex GitHub interactions. We'll learn about some less common but just as important Git commands.
5. Practice resolving a merge conflict. Merge conflicts happen; we'll learn how to deal with them.
6. Create GitHub issues. We'll create GitHub issues to track our work during this module.
7. Learn the Git workflow as we build a new feature. We'll build our first feature, which is described in the first GitHub issue we created.
8. Add a contact form to the hero section. We'll work on the second GitHub issue and feature, which will help us practice our Git workflow.

You'll use these skills throughout your career as a full-stack web developer. It's okay if they seem confusing at first; over time and with lots of practice, they'll become second nature.


# Create a Development Environment

Because the current codebase is live, we can't make changes directly to it without disrupting Run Buddy's users. This is where Git comes into play.

## Using Git Branches

Git allows us to create  **branches** —copies of the codebase—to work in. When we're done working in a particular branch, we merge it into the "live" codebase in order to make it available to users. This allows us to protect and preserve existing, completed code.

Different branches represent different environments. Here's an example: the Run Buddy site runs from the `main` branch, which is the production environment. The **production environment** houses the "live" website or application—the finished product that people are using in real-time. As a rule, developers should never work on production environments directly, because any bugs or errors that arise will be immediately apparent to users.

Git branching helps us avoid that problem by isolating versions of the code for development and testing. This approach, called  **working in isolation** , allows developers to update the software without affecting the website or application that's currently in use.

**LEGACY LORE**Historically, most production environments have been stored in a branch labeled `master`, and you might still see evidence of this in legacy repos and documentation. But branch names are just labels that can be changed. Nowadays, many production environments are housed in the `main` branch, and Run Buddy is no exception.

End of text box.

Because we are preparing to work on some new features for Run Buddy, we need a branch to safely do that in. We'll use Git to create a copy of the `main` branch and call it the `develop` branch. The `develop` branch will be our  **development environment** , where we'll develop and test new features. When we're satisfied with the result and have a stable working version, we'll **merge** it into the `main` branch and update the live website.
