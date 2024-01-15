import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RoutesWeb } from "./route";
import DefaultLayout from "./components/DefaultLayout";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import Chat from "./components/Chat";
import NewLayout from "./components/NewLayout";

function App() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 1000);
  }, [show]);
  return (
    <Router>
      <div className="App">
        <Routes>
          {RoutesWeb.map((r, i) => {
            let Pages = r.component;
            const Layout = DefaultLayout;
            const LayoutTwo = NewLayout;
            if (i > 1 && i < 2) {
              return (
                <Route
                  path={r.path}
                  element={
                    show ? (
                      <Loading />
                    ) : (
                      <LayoutTwo>
                        <Pages />
                      </LayoutTwo>
                    )
                  }
                />
              );
            }
            if (i >= 2 && i <= 3) {
              return (
                <Route
                  path={r.path}
                  element={
                    show ? (
                      <Loading />
                    ) : (
                      <Layout>
                        <Pages />
                        <Chat />
                      </Layout>
                    )
                  }
                />
              );
            } else {
              return (
                <Route path={r.path} element={show ? <Loading /> : <Pages />} />
              );
            }
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
