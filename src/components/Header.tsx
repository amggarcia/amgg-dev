import Icon from "../icons/Icon";
import BackgroundContainer from "./BackgroundContainer";

export default function Header() {
  return (
    <BackgroundContainer>
      <div className="h-[30rem] mb-[-100px]">
        <div className="w-4/5 m-auto pt-40">
          <div className="flex max-h-10 pb-12 border-b-2 ">
            <Icon name="Computer" className="w-10" />
            <h1 className="flex grow ml-2 text-4xl font-bold">André Garcia</h1>
          </div>
          <span className="flex mt-2">Full Stack Developer</span>
        </div>
      </div>
    </BackgroundContainer>
  );
}
