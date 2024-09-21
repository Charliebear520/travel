import PlaceItem from "../PlaceItem/PlaceItem";

const PlaceObj = {
  title: "This is Taiwan",
  detail: "good",
};

export default function PlaceList() {
  return (
    <>
      <PlaceItem PlaceObj={PlaceObj} />
    </>
  );
}
