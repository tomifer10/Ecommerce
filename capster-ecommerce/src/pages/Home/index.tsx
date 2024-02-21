import Header from "../../components/Header";
import MainContent from "../../components/MainContent";
import Login from "../../components/Login";

type Props = {};

export default function Home({}: Props) {
  return (
    <>
      <Header />
      <MainContent />
      <Login />
    </>
  );
}
