import { styleText } from "util";

export function Title(props) {
  return (
    <div>
        <h1 className="text-5xl font-bold text-blue-500">{props.title}</h1>
        <p className="description">
            Get started by editing{" "}
            <code className="code">pages/index.js</code>
        </p>
    </div>
  );
}
