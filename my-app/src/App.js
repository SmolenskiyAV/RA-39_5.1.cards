import "./css/main.css";
import Card from "./components/Card/Card";

function App() {
 
  return (
    <>
    
    <Card>
      <svg className="bd-placeholder-img card-img-top">
        <rect width="96%" height="100%" fill="#868e96"></rect>
        <text x="28%" y="50%" fill="#dee2e6">Изображение</text>
      </svg>
    </Card>
    <Card />
    </>
  );
}

export default App;
