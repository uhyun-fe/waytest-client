import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Todo from "../Todo";

afterEach(() => {
   cleanup();
});

test("should render none-completed todo", () => {
   const todo = { id: 1, title: "할일 111", completed: false };
   render(<Todo todo={todo} />);
   // const todoElement = screen.getByTestId("todo-1");
   // expect(todoElement).toBeInTheDocument();
   // expect(todoElement).toHaveTextContent("할일 111");
   // expect(!todoElement.innerHTML.includes("<strike>")).toBeTruthy();
});

// test("should render completed todo", () => {
//    const todo = { id: 2, title: "할일 222", completed: true };
//    render(<Todo todo={todo} />);
//    const todoElement = screen.getByTestId("todo-2");
//    expect(todoElement).toBeInTheDocument();
//    expect(todoElement).toHaveTextContent("할일 222");
//    expect(todoElement.innerHTML.includes("<strike>")).toBeTruthy();
// });

// test("matches snapshot", () => {
//    const todo = { id: 1, title: "할일 111", completed: false };
//    const tree = renderer.create(<Todo todo={todo} />).toJSON();
//    expect(tree).toMatchSnapshot();
// });
