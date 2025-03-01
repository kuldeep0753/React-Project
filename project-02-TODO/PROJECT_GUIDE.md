# TODO App

## Description
A simple React-based TODO application that allows users to add, delete, and mark tasks as completed.

## Features
- Add tasks to the list.
- Delete tasks from the list.
- Mark tasks as completed with a checkbox (strikethrough applied to completed tasks).

## Technologies Used
- React (useState Hook)
- JavaScript (ES6+)
- CSS (for basic styling)

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/kuldeep0753/React-project.git
   ```
2. Navigate to the project folder:
   ```sh
   cd React-project
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## Usage
1. Type a task in the input field.
2. Click the "Add" button to add the task to the list.
3. Click the checkbox to mark the task as completed (applies strikethrough style).
4. Click the "Delete" button to remove the task from the list.

## Code Explanation
- `useState` is used to manage the task list (`listTask`) and completed tasks (`completedTask`).
- `toggleTask(index)`: Toggles the completion state of a task using an object-based state.
- `setListTask([...listTask, inputValue])`: Adds a new task without mutating state directly.
- `setListTask(listTask.filter((ele, i) => i !== index))`: Removes a task based on its index.
- CSS styles (`done` and `pending`) are applied dynamically based on task completion.

## Future Enhancements (Pending)
- Edit tasks
- Store tasks in local storage
- Add due dates and priorities
- Implement drag-and-drop reordering

## License
This project is open-source and available under the MIT License.

