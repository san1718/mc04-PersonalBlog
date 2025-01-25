document.addEventListener("DOMContentLoaded", () => {
    // Gets the form element
    const form = document.getElementById("blog-form");

    // Adds event listener that handles form submission
    form.addEventListener("submit", handleFormSubmit);
});

// Function that handles form submission
function handleFormSubmit(event) {
    // Prevents default form submission
    event.preventDefault();

    // Gets input values from the form (username, title, content)
    const username = document.getElementById("username").value.trim();
    const title = document.getElementById("title").value.trim();
    const content = document.getElementById("content").value.trim();

    // Validates input forms
    if (!username || !title || !content) {
        // Error message if empty
        alert("Please complete all fields before submitting.");
        return;
    }

    // Creates blog post object
    const blogPost = {
        // Username, title, content, and date
        username,
        title,
        content,
        date: new Date().toISOString()
    };

    // Retrieves existing posts from localStorage or initializes an empty array
    let posts = JSON.parse(localStorage.getItem("blogPosts")) || [];

    // Add the new post to the array
    posts.push(blogPost);

    // Save the updated posts array to localStorage
    localStorage.setItem("blogPosts", JSON.stringify(posts));

    // Redirect to the blog page after successful submission
    window.location.href = "blog.html";
}
