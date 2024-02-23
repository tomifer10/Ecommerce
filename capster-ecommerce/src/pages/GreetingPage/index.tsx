import Header from "../../components/Header";
import Greeting from "../../components/Greeting";

type Props = {};

export default function GreetingPage({}: Props) {
  return (
    <>
      <Header />
      <Greeting />
    </>
  );
}
