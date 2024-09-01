import { Space } from "antd";

function TextIcon({ title }: { title: string }) {
  return <div className="w-6 h-6 rounded-full flex justify-center items-center bg-green-300">
    <p>{title}</p>
  </div>
    ;
}

export default TextIcon;
