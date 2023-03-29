# Using a Single Repo for Full Stack

a.k.a a mono-repo or a monolith

# Pros and Cons of Each approach

_As with everything in this career, choosing one approach is a trade-off -- one is not inherently better than the other_

## Monolith

**Pros**

- Single repository makes development easier
- Removes issues with CORS and cross-origin
- Single deployment (some see this as a con)

**Cons**

- Single deployment (can become complicated on larger apps)
- Single repository can become very large and unweildy
- Multiple teams working on a single repository can lead to merge conflicts galore slowing down development

## Separate Repos

**Pros**

- Separate repos allows for separate deployment processes so you can optimize for the technology
- Allows teams to work independently of each other
- Can improve / enforce communication and documentation of APIs

**Cons**

- CORS and cookies -- need I say more? (Although normally, you solve this issue once and you're done so not that big a deal)
- Can create dependency / timing issues around deployment
- Managing multiple repositories during development if you're working across the stack is definitely harder than a single repo
