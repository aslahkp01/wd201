const todoList = require("../todo");

describe("Todo List Test Suite", () => {
  let todos;
  const formattedDate = (d) => d.toISOString().split("T")[0];
  const today = formattedDate(new Date());
  const yesterday = formattedDate(new Date(new Date().setDate(new Date().getDate() - 1)));
  const tomorrow = formattedDate(new Date(new Date().setDate(new Date().getDate() + 1)));

  beforeEach(() => {
    todos = todoList();
  });

  test("should add a new todo", () => {
    todos.add({ title: "New Task", dueDate: today, completed: false });
    expect(todos.all.length).toBe(1);
    expect(todos.all[0].title).toBe("New Task");
  });

  test("should mark a todo as completed", () => {
    todos.add({ title: "Complete Me", dueDate: today, completed: false });
    todos.markAsComplete(0);
    expect(todos.all[0].completed).toBe(true);
  });

  test("should retrieve overdue items", () => {
    todos.add({ title: "Overdue Task", dueDate: yesterday, completed: false });
    const overdueItems = todos.overdue();
    expect(overdueItems.length).toBe(1);
    expect(overdueItems[0].dueDate).toBe(yesterday);
  });

  test("should retrieve due today items", () => {
    todos.add({ title: "Today's Task", dueDate: today, completed: false });
    const todayItems = todos.dueToday();
    expect(todayItems.length).toBe(1);
    expect(todayItems[0].dueDate).toBe(today);
  });

  test("should retrieve due later items", () => {
    todos.add({ title: "Future Task", dueDate: tomorrow, completed: false });
    const laterItems = todos.dueLater();
    expect(laterItems.length).toBe(1);
    expect(laterItems[0].dueDate).toBe(tomorrow);
  });
});
