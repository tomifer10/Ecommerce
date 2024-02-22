import "./prodcard.css";

type Props = {
  id: string;
  Image: string;
  Name: string;
  Price: number;
};

export default function ProdCard(props: Props) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={props.Image} alt="" />
      </div>
      <h5>{props.Name}</h5>
      <p>${props.Price}</p>
    </div>
  );
}
