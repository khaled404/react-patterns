import Header from "./components/header";
import {
  CollapseContainer,
  CollapseItem,
} from "./components/render-props-collapse";

const items = [
  "Lorem Ipsum is simply dummy",
  "Lorem Ipsum is simply dummy",
  "Lorem Ipsum is simply dummy",
];
function App() {
  return (
    <div className="container mx-auto py-4 bg-white">
      <Header title="render props pattern" />
      <CollapseContainer>
        {({ activeId, openCollapse }) =>
          items.map((item, index) => (
            <CollapseItem
              onClick={openCollapse(index)}
              active={index === activeId}
              title={item}
            >
              {item}
            </CollapseItem>
          ))
        }
      </CollapseContainer>

      <Header title="render props pattern" />
    </div>
  );
}

export default App;
