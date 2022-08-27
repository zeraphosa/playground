import Sidebar from "components/Sidebar";
import Footer from "components/Footer";
import Content from "components/Content";

export default function App() {
  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </>
  );
}
