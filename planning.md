# Express Todo List Planning

1. Users should be able to create a todo list item (Create)
2. Users should be able to read a list of todos (Read)
3. Users should be able to update a todo (Update) -- check it as complete
4. Users should be able to delete a todo (Delete)

Database we'll be using is called MongoDB (NoSQL)

Mongoose will be the tool that we use to MAP JS objects to MongoDB Documents
Mongoose is known as an Object Document Mapper (ODM)

We are going to use Mongoose to do the following:
1. Connect to a MongoDB database
2. We can use mongoose to dictate the "shape" of our data
3. We will use Mongoose to CRUD our data


What is a Todo?
What are some things we need to know?
- What is the task? (string)
- What is the status? (boolean)
- Who posted the todo? (string)

```
{
  task: "Mow the lawn",
  complete: false,
  user: "Sam",
}
```