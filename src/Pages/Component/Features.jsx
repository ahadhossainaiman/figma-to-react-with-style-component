import { Container, GridThree } from "../../Styles/Common.styled";
import { FeatureCart, FeaturesSection } from "../../Styles/Home.styled";
import bootstrap from "../../assets/image/bootstrap.png";
import materialUI from "../../assets/image/materialUI.png";
import tailwind from "../../assets/image/tailwind.png";

const data = [
  {
    id: 1,
    name: "Bootstrap",
    img: bootstrap,
    bgColor: "rgba(109, 67, 161, 0.3)",
    color: "rgba(109, 67, 161, 1)",
  },
  {
    id: 2,
    name: "Material UI",
    img: materialUI,
    bgColor: "rgba(61, 128, 247, 0.3)",
    color: "rgba(61, 128, 247, 1)",
  },
  {
    id: 3,
    name: "Tailwind",
    img: tailwind,
    bgColor: "rgba(66, 166, 178, 0.3)",
    color: "rgba(66, 166, 178, 1)",
  },
];

const Features = () => {
  return (
    <FeaturesSection>
      <Container>
        <h2>Others well known styling framework </h2>

        <GridThree>
          {data.map((feature) => (
            // eslint-disable-next-line react/jsx-key
            <FeatureCart bgColor={feature.bgColor} color={feature.color}>
              <img src={feature.img} alt="" />
              <div className="caption">
                <p>{feature.name}</p>
              </div>
            </FeatureCart>
          ))}
        </GridThree>
      </Container>
    </FeaturesSection>
  );
};

export default Features;
